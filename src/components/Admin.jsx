import { useContext } from "react"
import { OrdersData } from "./OrdersData"
import { AdminOrder } from "./AdminOrder";
import '../index.css'

export const Admin = () => {
	const { orders } = useContext(OrdersData);
	console.log( orders )
	return (
			<table className="table-auto mx-auto mt-12 bg-gray-700 border text-slate-200 text-center">
				<thead className="bg-indigo-500">
					<tr>
						<th className="px-8 pt-2">Orden</th>
						<th className="px-8">Origen</th>
						<th className="px-8">Destino</th>
						<th className="px-8">Estado</th>
					</tr>
				</thead>
				<tbody>
					{
						orders.map( order => {
							return (
								<AdminOrder key={ order.ordercode }
																{ ...order } />
							)
						})
					}
				</tbody>
			</table>
		)
}
