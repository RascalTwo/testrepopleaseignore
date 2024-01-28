import { useEffect, useState } from 'react';
import FluidIntakeUpdateForm from './FluidIntakeUpdateForm';
import FluidIntakeDeleteForm from './FluidIntakeDeleteForm';
import FluidIntakeByDays from './FluidIntakeByDays';

export interface LIList {
  _id: string;
  fluidType: string;
  amount: number;
  date: string;
}

const FluidIntakeLog = () => {
  const [fluidList, setFluidList] = useState<LIList[]>([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await fetch('/api/fluidIntakeLog', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        setFluidList(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    getList();
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="text-xl uppercase">
              <th>Date</th>
              <th>Fluid Type</th>
              <th>Amount (ml)</th>
              <th>edit/delete</th>
            </tr>
          </thead>
          <tbody>
            {fluidList.map((item) => (
              <tr className="bg-indigo-300" key={item._id}>
                <td>{new Date(item.date).toLocaleDateString()}</td>
                <td>{item.fluidType}</td>
                <td>{item.amount}</td>
                <td className="flex items-center">
                  <FluidIntakeUpdateForm
                    item={item}
                    fluidType={item.fluidType}
                    fluidAmount={item.amount}
                  />
                  <FluidIntakeDeleteForm item={item} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <FluidIntakeByDays />
      </div>
    </>
  );
};

export default FluidIntakeLog;
