const Table = () => {
  return (
    <table className="border rounded-md mt-12 text-sm">
      <thead>
        <tr className="border-b-orange-600 bg-orange-600">
          <th className="border px-2 py-2">Sno.</th>
          <th className="border px-2 py-2">Team Name</th>
          <th className="border px-2 py-2">CD</th>
          <th className="border px-2 py-2">PP</th>
          <th className="border px-2 py-2">FP</th>
          <th className="border px-2 py-2">TP</th>
        </tr>
        {<TableRow />}
      </thead>
      <tbody></tbody>
    </table>
  );
};
const TableRow = () => {
  return (
    <tr>
      <td className="border px-2 ">1</td>
      <td className="border px-2 ">MRE Esports</td>
      <td className="border px-2 ">2</td>
      <td className="border px-2 ">80</td>
      <td className="border px-2 ">90</td>
      <td className="border px-2 ">77</td>
    </tr>
  );
};

export default Table;
