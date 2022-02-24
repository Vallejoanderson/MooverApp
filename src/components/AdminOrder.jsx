
import React, { useState } from 'react'

export const AdminOrder = ({ ordercode, origindistrit, destinationdistrit, status}) => {
	const [ statusOption, SetStatusOption ] = useState( status );

	const handleChange = ({target}) => {
		SetStatusOption(target.value);
	}

	return (
		<tr key={ordercode}
				className={`${ statusOption === 'En proceso' ? 'bg-yellow-600'
										:	 statusOption === 'En camino'  ? 'bg-red-500'
										:	 'bg-green-600' }`}>
			<td className="px-8">{ordercode}</td>
			<td className="px-8">{origindistrit}</td>
			<td className="px-8">{destinationdistrit}</td>
			<td className="px-8 pb-2">
				<select className = "text-center border-2 py-1 px-2 rounded mt-1 bg-gray-700"
								value = { statusOption }
								onChange = { handleChange } >
						<option value="En proceso">
							En proceso
						</option>
						<option value="En camino">
							En camino
							</option>
						<option value="Entregado">
							Entregado
						</option>
					</select>
			</td>
		</tr>
	)
}