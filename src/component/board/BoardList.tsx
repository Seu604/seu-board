import BoardItem from './BoardItem';
import type { BoardResponse } from '../../type/Board';
import { useEffect, useState } from 'react';

const BoardList = ({ boardList }: { boardList: BoardResponse[] }) => {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-gray-400">全{boardList.length}件</p>
                <button className="text-sm px-4 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    + 新規投稿
                </button>
            </div>

            <div className="border border-gray-100 rounded-xl overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-5 py-2.5 text-left text-xs font-medium text-gray-400">タイトル</th>
                            <th className="px-5 py-2.5 text-left text-xs font-medium text-gray-400">投稿者</th>
                            <th className="px-5 py-2.5 text-right text-xs font-medium text-gray-400">投稿日</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {boardList.map(board => (
                            <BoardItem key={board.id} board={board} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BoardList;