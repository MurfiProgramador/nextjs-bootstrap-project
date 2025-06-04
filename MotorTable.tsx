"use client"

import { Motor } from "@/types/motor"

interface MotorTableProps {
  motors: Motor[]
  onEdit: (motor: Motor) => void
  onDelete: (id: number) => void
}

const MotorTable: React.FC<MotorTableProps> = ({ motors, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-700/30">
      <table className="w-full">
        <thead>
          <tr className="bg-black/20">
            <th className="px-4 py-3 text-left text-xs font-semibold text-orange-300 uppercase tracking-wider">Nombre/ID</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-orange-300 uppercase tracking-wider">Voltaje</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-orange-300 uppercase tracking-wider">Peso</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-orange-300 uppercase tracking-wider">HP</th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-orange-300 uppercase tracking-wider">Cambio de Rodamientos</th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-orange-300 uppercase tracking-wider">Código de Rodamiento</th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-orange-300 uppercase tracking-wider">Megado (Antes)</th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-orange-300 uppercase tracking-wider">IP (Antes)</th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-orange-300 uppercase tracking-wider">DAR (Antes)</th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-orange-300 uppercase tracking-wider">Megado (Después)</th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-orange-300 uppercase tracking-wider">IP (Después)</th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-orange-300 uppercase tracking-wider">DAR (Después)</th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-orange-300 uppercase tracking-wider">Pintura</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-orange-300 uppercase tracking-wider">Personal</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-orange-300 uppercase tracking-wider">Notas de llegada</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-orange-300 uppercase tracking-wider">Notas de salida</th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-orange-300 uppercase tracking-wider">Fotos Antes</th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-orange-300 uppercase tracking-wider">Fotos Después</th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-orange-300 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700/30">
          {motors.length === 0 ? (
            <tr>
              <td colSpan={19} className="text-center py-8 text-gray-400">
                No hay motores registrados aún. Agregue un motor usando el formulario.
              </td>
            </tr>
          ) : (
            motors.map((motor) => (
              <tr key={motor.id} className="group hover:bg-white/5 transition-colors duration-200">
                <td className="px-4 py-3 text-gray-200">{motor.name}</td>
                <td className="px-4 py-3 text-gray-200">{motor.voltage}</td>
                <td className="px-4 py-3 text-gray-200">{motor.weight}</td>
                <td className="px-4 py-3 text-gray-200">{motor.hp}</td>
                <td className="px-4 py-3 text-center text-gray-200">
                  {motor.bearingChange ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-400/10 text-green-400">
                      Sí
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-500/10 text-gray-400">
                      No
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-center text-gray-200">
                  {motor.bearingChange ? motor.bearingCode : "-"}
                </td>
                <td className="px-4 py-3 text-center text-gray-200">
                  {motor.megadoBefore ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-400/10 text-blue-400">
                      Sí
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-500/10 text-gray-400">
                      No
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-center text-gray-200">{motor.megadoBeforeIP}</td>
                <td className="px-4 py-3 text-center text-gray-200">{motor.megadoBeforeDAR}</td>
                <td className="px-4 py-3 text-center text-gray-200">
                  {motor.megadoAfter ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-400/10 text-blue-400">
                      Sí
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-500/10 text-gray-400">
                      No
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-center text-gray-200">{motor.megadoAfterIP}</td>
                <td className="px-4 py-3 text-center text-gray-200">{motor.megadoAfterDAR}</td>
                <td className="px-4 py-3 text-center text-gray-200">
                  {motor.paintingDone ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-400/10 text-green-400">
                      Sí
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-500/10 text-gray-400">
                      No
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-gray-200 whitespace-pre-wrap">{motor.personnel}</td>
                <td className="px-4 py-3 text-gray-200 whitespace-pre-wrap">{motor.arrivalNotes}</td>
                <td className="px-4 py-3 text-gray-200 whitespace-pre-wrap">{motor.deliveryNotes}</td>
                <td className="px-4 py-3">
                  {motor.photosBefore.length > 0 && (
                    <div className="grid grid-cols-2 gap-1">
                      {motor.photosBefore.map((photo, index) => (
                        <img
                          key={index}
                          src={photo}
                          alt={`Foto antes ${index + 1} del motor ${motor.name}`}
                          className="w-16 h-16 object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-200"
                        />
                      ))}
                    </div>
                  )}
                </td>
                <td className="px-4 py-3">
                  {motor.photosAfter.length > 0 && (
                    <div className="grid grid-cols-2 gap-1">
                      {motor.photosAfter.map((photo, index) => (
                        <img
                          key={index}
                          src={photo}
                          alt={`Foto después ${index + 1} del motor ${motor.name}`}
                          className="w-16 h-16 object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-200"
                        />
                      ))}
                    </div>
                  )}
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center justify-center space-x-3">
                    <button
                      onClick={() => onEdit(motor)}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      aria-label={`Editar motor ${motor.name}`}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`¿Está seguro de eliminar el motor ${motor.name}?`)) {
                          onDelete(motor.id)
                        }
                      }}
                      className="text-red-400 hover:text-red-300 transition-colors duration-200"
                      aria-label={`Eliminar motor ${motor.name}`}
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default MotorTable
