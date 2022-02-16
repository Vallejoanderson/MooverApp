

import React from 'react';

export const OrderFound = ( { found } ) => {


	if(!found) return <p className="text-center text-sm text-red-500">No se ha encontrado tu orden.</p>
	
	return (
					<div className="flex justify-center mt-20 animate__animated animate__slideInDown">
						<table className="table text-center border-2 border-indigo-500">
							<thead>
								<th colspan="2" className="px-2 bg-gray-300">Origen</th>
							</thead>
							<tbody>
								<tr>
									<td className="px-2 text-left">Nombre: </td>
									<td className="px-2 text-right">{found.originname}</td>
								</tr>
								<tr>
									<td className="px-2 text-left">Direccion: </td>
									<td className="px-2 text-right">{found.originaddress}</td>
								</tr>
								<tr>
									<td className="px-2 text-left">Distrito: </td>
									<td className="px-2 text-right">{found.origindistrit}</td>
								</tr>
								<br />
								<tr>
									<td colspan="2" className="text-center font-bold bg-gray-300">Destino</td>
								</tr>
								<tr>
									<td className="px-2 text-left">Nombre: </td>
									<td className="px-2 text-right">{found.destinationname}</td>
								</tr>
								<tr>
									<td className="px-2 text-left">Direccion: </td>
									<td className="px-2 text-right">{found.destinationaddress}</td>
								</tr>
								<tr>
									<td className="px-2 text-left">Distrito: </td>
									<td className="px-2 text-right">{found.destinationdistrit}</td>
								</tr>
								<br />
								<tr>
									<td colspan="2" className="text-center font-bold bg-gray-300">Estado</td>
								</tr>
								<tr>
									<td colspan="2" className="text-center font-bold bg-green-300">{found.status}</td>
								</tr>
							</tbody>
						</table>
					</div>
				 );
};
