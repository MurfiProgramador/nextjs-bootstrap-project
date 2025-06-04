"use client"

import { useState } from "react"
import { MotorFormProps } from "@/types/motor"

export default function MotorForm({ initialData, onSubmit, onCancel, submitLabel = "Agregar Motor" }: MotorFormProps) {
  const [name, setName] = useState(initialData?.name ?? "")
  const [voltage, setVoltage] = useState(initialData?.voltage ?? "")
  const [weight, setWeight] = useState(initialData?.weight ?? "")
  const [hp, setHp] = useState(initialData?.hp ?? "")
  const [bearingChange, setBearingChange] = useState(initialData?.bearingChange ?? false)
  const [bearingCode, setBearingCode] = useState(initialData?.bearingCode ?? "")
  const [megadoBefore, setMegadoBefore] = useState(initialData?.megadoBefore ?? false)
  const [megadoBeforeIP, setMegadoBeforeIP] = useState(initialData?.megadoBeforeIP ?? "")
  const [megadoBeforeDAR, setMegadoBeforeDAR] = useState(initialData?.megadoBeforeDAR ?? "")
  const [megadoAfter, setMegadoAfter] = useState(initialData?.megadoAfter ?? false)
  const [megadoAfterIP, setMegadoAfterIP] = useState(initialData?.megadoAfterIP ?? "")
  const [megadoAfterDAR, setMegadoAfterDAR] = useState(initialData?.megadoAfterDAR ?? "")
  const [paintingDone, setPaintingDone] = useState(initialData?.paintingDone ?? false)
  const [personnel, setPersonnel] = useState(initialData?.personnel ?? "")
  const [arrivalNotes, setArrivalNotes] = useState(initialData?.arrivalNotes ?? "")
  const [deliveryNotes, setDeliveryNotes] = useState(initialData?.deliveryNotes ?? "")
  const [photosBefore, setPhotosBefore] = useState<string[]>(initialData?.photosBefore ?? [])
  const [photosAfter, setPhotosAfter] = useState<string[]>(initialData?.photosAfter ?? [])
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handlePhotosBeforeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = Array.from(e.target.files).map(file => URL.createObjectURL(file))
      setPhotosBefore([...photosBefore, ...newPhotos])
    }
  }

  const handlePhotosAfterUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = Array.from(e.target.files).map(file => URL.createObjectURL(file))
      setPhotosAfter([...photosAfter, ...newPhotos])
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!name.trim()) {
      newErrors.name = "El nombre del motor es requerido"
    }
    if (!voltage.trim()) {
      newErrors.voltage = "El voltaje es requerido"
    }
    if (!hp.trim()) {
      newErrors.hp = "Los HP son requeridos"
    }
    if (bearingChange && !bearingCode.trim()) {
      newErrors.bearingCode = "El código de rodamiento es requerido cuando se marca el cambio"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    onSubmit({
      name,
      voltage,
      weight,
      hp,
      bearingChange,
      bearingCode,
      megadoBefore,
      megadoBeforeIP,
      megadoBeforeDAR,
      megadoAfter,
      megadoAfterIP,
      megadoAfterDAR,
      paintingDone,
      personnel,
      arrivalNotes,
      deliveryNotes,
      photosBefore,
      photosAfter,
    })
  }

  const inputClasses = "w-full bg-gray-900/50 border border-gray-700/50 text-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 placeholder-gray-500"
  const labelClasses = "block text-sm font-medium text-gray-300 mb-2"
  const errorClasses = "text-red-400 text-xs mt-1"

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses} htmlFor="name">
            Nombre o ID del Motor
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${inputClasses} ${errors.name ? 'border-red-500/50' : ''}`}
            placeholder="Ejemplo: Motor A123"
          />
          {errors.name && <p className={errorClasses}>{errors.name}</p>}
        </div>

        <div>
          <label className={labelClasses} htmlFor="voltage">
            Voltaje
          </label>
          <input
            id="voltage"
            type="text"
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
            className={`${inputClasses} ${errors.voltage ? 'border-red-500/50' : ''}`}
            placeholder="Ej: 220V"
          />
          {errors.voltage && <p className={errorClasses}>{errors.voltage}</p>}
        </div>

        <div>
          <label className={labelClasses} htmlFor="weight">Peso</label>
          <input
            id="weight"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className={inputClasses}
            placeholder="Ej: 50kg"
          />
        </div>

        <div>
          <label className={labelClasses} htmlFor="hp">HP</label>
          <input
            id="hp"
            type="text"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            className={`${inputClasses} ${errors.hp ? 'border-red-500/50' : ''}`}
            placeholder="Ej: 5HP"
          />
          {errors.hp && <p className={errorClasses}>{errors.hp}</p>}
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="personnel">Personal Encargado</label>
        <input
          id="personnel"
          type="text"
          value={personnel}
          onChange={(e) => setPersonnel(e.target.value)}
          className={inputClasses}
          placeholder="Nombre del técnico"
        />
      </div>

      <div className="bg-gray-800/30 backdrop-blur-sm px-8 py-6 rounded-xl border border-gray-700/30">
        <h3 className="text-lg font-semibold text-orange-300 mb-6">Estado del Mantenimiento</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <label className="relative inline-flex items-center group cursor-pointer">
              <input
                type="checkbox"
                checked={bearingChange}
                onChange={() => setBearingChange(!bearingChange)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-700/50 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500/30 peer-checked:after:bg-orange-400"></div>
              <span className="ml-3 text-sm font-medium text-gray-300 group-hover:text-gray-200">
                Cambio de Rodamientos
              </span>
            </label>

            {bearingChange && (
              <div className="pl-14 -mt-2">
                <input
                  type="text"
                  value={bearingCode}
                  onChange={(e) => setBearingCode(e.target.value)}
                  className={`${inputClasses} ${errors.bearingCode ? 'border-red-500/50' : ''}`}
                  placeholder="Código de rodamiento"
                />
                {errors.bearingCode && <p className={errorClasses}>{errors.bearingCode}</p>}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <label className="relative inline-flex items-center group cursor-pointer">
                <input
                  type="checkbox"
                  checked={megadoBefore}
                  onChange={() => setMegadoBefore(!megadoBefore)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700/50 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500/30 peer-checked:after:bg-orange-400"></div>
                <span className="ml-3 text-sm font-medium text-gray-300 group-hover:text-gray-200">
                  Megado (Antes)
                </span>
              </label>

              {megadoBefore && (
                <div className="pl-14 space-y-3">
                  <input
                    type="text"
                    value={megadoBeforeIP}
                  <label className="block text-sm font-medium text-white">IP</label>
                  <input
                    type="text"
                    value={megadoBeforeIP}
                    onChange={(e) => setMegadoBeforeIP(e.target.value)}
                    className="mt-1 w-32 border border-gray-400 rounded px-2 py-1"
                    placeholder="Valor IP"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">DAR</label>
                  <input
                    type="text"
                    value={megadoBeforeDAR}
                    onChange={(e) => setMegadoBeforeDAR(e.target.value)}
                    className="mt-1 w-32 border border-gray-400 rounded px-2 py-1"
                    placeholder="Valor DAR"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col space-y-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={megadoAfter}
                onChange={() => setMegadoAfter(!megadoAfter)}
                className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-500"
              />
              <span className="ml-2 text-white">Megado (Después)</span>
            </label>
            {megadoAfter && (
              <div className="pl-7 space-y-2">
                <div>
                  <label className="block text-sm font-medium text-white">IP</label>
                  <input
                    type="text"
                    value={megadoAfterIP}
                    onChange={(e) => setMegadoAfterIP(e.target.value)}
                    className="mt-1 w-32 border border-gray-400 rounded px-2 py-1"
                    placeholder="Valor IP"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">DAR</label>
                  <input
                    type="text"
                    value={megadoAfterDAR}
                    onChange={(e) => setMegadoAfterDAR(e.target.value)}
                    className="mt-1 w-32 border border-gray-400 rounded px-2 py-1"
                    placeholder="Valor DAR"
                  />
                </div>
              </div>
            )}
          </div>

          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={paintingDone}
              onChange={() => setPaintingDone(!paintingDone)}
              className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-500"
            />
            <span className="ml-2 text-white">Pintura</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-2" htmlFor="arrivalNotes">
            Notas de llegada
          </label>
          <textarea
            id="arrivalNotes"
            value={arrivalNotes}
            onChange={(e) => setArrivalNotes(e.target.value)}
            className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            rows={3}
            placeholder="Estado al llegar"
          />
        </div>

        <div>
          <label className="block font-medium mb-2" htmlFor="deliveryNotes">
            Notas de salida
          </label>
          <textarea
            id="deliveryNotes"
            value={deliveryNotes}
            onChange={(e) => setDeliveryNotes(e.target.value)}
            className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            rows={3}
            placeholder="Estado al salir"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="block font-medium mb-2">Fotos Antes del Mantenimiento</label>
        <div className="bg-gray-50 p-4 rounded-lg">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotosBeforeUpload}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer
              file:mr-4 file:py-2.5 file:px-4 
              file:rounded-full file:border-0 
              file:text-sm file:font-semibold
              file:bg-black file:text-white 
              hover:file:bg-gray-800
              focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        {photosBefore.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
            {photosBefore.map((photo, index) => (
              <div key={index} className="relative group">
                <img
                  src={photo}
                  alt={`Foto antes ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg shadow-sm"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-3">
        <label className="block font-medium mb-2">Fotos Después del Mantenimiento</label>
        <div className="bg-gray-50 p-4 rounded-lg">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotosAfterUpload}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer
              file:mr-4 file:py-2.5 file:px-4 
              file:rounded-full file:border-0 
              file:text-sm file:font-semibold
              file:bg-black file:text-white 
              hover:file:bg-gray-800
              focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        {photosAfter.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
            {photosAfter.map((photo, index) => (
              <div key={index} className="relative group">
                <img
                  src={photo}
                  alt={`Foto después ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg shadow-sm"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-4">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2.5 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
          >
            Cancelar
          </button>
        )}
        <button
          type="submit"
          className="bg-black text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-sm"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  )
}
