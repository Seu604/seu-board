import { useNavigate } from 'react-router-dom';
import type { BoardResponse } from '../../type/Board';

const BoardItem = ({ board }: { board: BoardResponse }) => {
    const navigate = useNavigate();

    return (
        <tr
            onClick={() => navigate(`/board/${board.id}`)}
            className="hover:bg-gray-50 cursor-pointer transition-colors"
        >
            <td className="px-5 py-3">
                <p className="text-sm font-medium text-gray-900">{board.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">コメント {board.comments.length}件</p>
            </td>
            <td className="px-5 py-3">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-xs font-medium text-blue-700">
                        {board.authorUsername[0]}
                    </div>
                    <span className="text-sm text-gray-500">{board.authorUsername}</span>
                </div>
            </td>
            <td className="px-5 py-3 text-right text-xs text-gray-400">
                {board.createdDate}
            </td>
        </tr>
    );
};

export default BoardItem;