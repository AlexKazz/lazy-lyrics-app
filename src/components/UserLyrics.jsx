import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, selectLyrics } from "./lyricsSlice";
import { v4 as uuidv4 } from "uuid";
import { useTable, useResizeColumns } from "react-table";

function UserLyrics() {
  const lyrics = useSelector(selectLyrics);
  const dispatch = useDispatch();

  const data = React.useMemo(() => lyrics, [lyrics]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Lyric",
        accessor: "snippet",
        width: 300,
        maxWidth: 300,
        minWidth: 300,
      },
      {
        Header: "Song",
        accessor: "song",
      },
      {
        Header: "Artist",
        accessor: "artist",
      },
      {
        Header: "Prompt",
        accessor: "prompt",
        width: 75,
        maxWidth: 75,
        minWidth: 75,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },

      useResizeColumns
    );
  console.log("data", data);
  return (
    // <div className='font-fell w-2/3 shadow-md grow shadow-slate-400 overflow-y-auto max-h-0 min-h-full bg-white bg-opacity-95 rounded-sm py-9 px-10 text-center'>
    /* {lyrics
        ? lyrics.map((lyric) => (
            <div key={lyric.id} className='py-1 group'>
              <p className='group-hover:hidden'>{lyric.snippet}</p>
              <div className='hidden group-hover:block hover:bg-slate-200'>
                <p className='italic'>{lyric.prompt}</p>
                <p>
                  "{lyric.song}" by {lyric.artist}
                </p>
                <button
                  className='opacity-50 text-sm hover:underline items-center'
                  onClick={() => dispatch(remove(lyric))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        : null} */
    <div className="flex w-5/6 shadow-md shadow-slate-400 overflow-y-auto max-h-0 min-h-full bg-white bg-opacity-95 rounded-lg text-center">
      <table className="w-full h-32" {...getTableProps()}>
        <thead className="sticky top-0">
          {headerGroups.map((headerGroup) => (
            <tr
              key={uuidv4()}
              className="bg-slate-200 font-fell "
              {...headerGroup.getHeaderGroupProps}
            >
              {headerGroup.headers.map((column) => (
                <th
                  className="py-2 flex-col justify-evenly"
                  {...column.getHeaderProps({
                    style: { minWidth: column.minWidth, width: column.width },
                  })}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="font-fell" {...getTableProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr className="border-2 border-slate-200" {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td className="p-2" {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserLyrics;
