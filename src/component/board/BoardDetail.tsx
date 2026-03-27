import { useNavigate, useParams } from "react-router-dom";
import { useBoardDetail } from "../../api/SampleData";

const BoardDetail = () => {
    
    const { id } = useParams<{ id: string }>();
    const { boardDetail, loading } = useBoardDetail(id!);

    return (
        <div className="max-w-2xl mx-auto py-6 px-4">

            {/* 戻るボタン */}
            {/* <button
            onClick={() => navigate("/board")}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 mb-4 transition-colors"
            >
            <ChevronLeft size={14} />
            一覧に戻る
            </button> */}

            {/* 投稿本文カード */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden mb-3">

            <div className="px-6 pt-5 pb-4">
                <p className="text-base font-medium text-gray-900 mb-3">{boardDetail?.title}</p>
                <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-xs font-medium text-blue-700">
                    {boardDetail?.authorUsername[0]}
                    </div>
                    <span className="text-sm text-gray-500">{boardDetail?.authorUsername}</span>
                </div>
                <span className="text-xs text-gray-400">{boardDetail?.createdDate}</span>
                </div>
            </div>

            <div className="border-t border-gray-100 px-6 py-5">
                <p className="text-sm text-gray-900 leading-relaxed whitespace-pre-wrap">
                {boardDetail?.content}
                </p>
            </div>

            {/* 自分の投稿の場合のみ表示 */}
            {/* {boardDetail.authorUsername === currentUser.username && (
                <div className="border-t border-gray-100 px-6 py-3 flex justify-end gap-2">
                <button
                    onClick={() => navigate(`/board/${id}/edit`)}
                    className="text-xs text-gray-500 border border-gray-200 rounded-lg px-3.5 py-1.5 hover:bg-gray-50 transition-colors"
                >
                    編集
                </button>
                <button
                    onClick={handleDelete}
                    className="text-xs text-red-700 border border-red-100 rounded-lg px-3.5 py-1.5 hover:bg-red-50 transition-colors"
                >
                    削除
                </button>
                </div>
            )} */}
            </div>

            {/* コメントカード */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">

            <div className="px-6 py-3.5 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">
                コメント
                <span className="text-xs font-normal text-gray-400 ml-1">{boardDetail?.comments.length}件</span>
                </p>
            </div>

            {boardDetail?.comments.map((comment) => (
                <div key={comment.id} className="px-6 py-4 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <div className="w-6.5 h-6.5 rounded-full bg-blue-50 flex items-center justify-center text-xs font-medium text-blue-700">
                                {comment.authorUsername[0]}
                            </div>
                            <span className="text-sm text-gray-500">{comment.authorUsername}</span>
                            
                            {/* 投稿者バッジ */}
                            {comment.authorUsername === boardDetail.authorUsername && (
                                <span className="text-xs text-blue-700 bg-blue-50 border border-blue-100 rounded px-1.5 py-0.5">
                                投稿者
                                </span>
                            )}
                        </div>
                        {/* <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{comment.createdDate}</span>
                        {comment.authorUsername === currentUser.username && (
                            <button
                            onClick={() => handleDeleteComment(comment.id)}
                            className="text-xs text-red-600 hover:opacity-70 transition-opacity"
                            >
                            削除
                            </button>
                        )}
                        </div> */}
                    </div>
                    <p className="text-sm text-gray-900 leading-relaxed ml-[34px]">
                        {comment.content}
                    </p>
                </div>
            ))}

            {/* コメント入力エリア */}
            <div className="px-6 py-4">
                <div className="flex gap-2.5 items-start">
                {/* <div className="w-6.5 h-6.5 rounded-full bg-blue-50 flex items-center justify-center text-xs font-medium text-blue-700 flex-shrink-0 mt-0.5">
                    {currentUser.username[0]}
                </div> */}
                {/* <div className="flex-1">
                    <textarea
                    rows={2}
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="コメントを入力してください"
                    className="w-full text-sm text-gray-900 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-400 resize-none transition-colors mb-2"
                    />
                    <div className="flex justify-end">
                    <button
                        onClick={handleCommentSubmit}
                        className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-lg px-4 py-1.5 hover:bg-blue-100 transition-colors"
                    >
                        コメントする
                    </button>
                    </div>
                </div> */}
                </div>
            </div>

            </div>
        </div>
    );
}

export default BoardDetail;