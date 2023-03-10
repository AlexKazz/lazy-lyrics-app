import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, selectLyrics } from './lyricsSlice';
import { v4 as uuidv4 } from 'uuid';
import { useTable } from "react-table";

function UserLyrics() {
  const lyrics = useSelector(selectLyrics);
  const dispatch = useDispatch();

  const data = React.useMemo(() => lyrics, [lyrics]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Lyric",
        accessor: "snippet",
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
      },
      
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
console.log('data', data);
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
      <div className='font-fell shadow-md grow w-5/6 shadow-slate-400 overflow-y-auto max-h-0 min-h-full bg-white bg-opacity-95 rounded-sm text-center'>
        <table {...getTableProps()}>
          <thead className='bg-slate-300'>
            {headerGroups.map((headerGroup) => (
              <tr key={uuidv4()} {...headerGroup.getHeaderGroupProps}>
                {headerGroup.headers.map((column) => (
                  <th className='py-3 border-2 border-slate-400 '{...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr className='border-b-2 border-slate-300' {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td className='p-3 border-2'{...cell.getCellProps()}>{cell.render("Cell")}</td>
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
