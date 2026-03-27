import { useNavigate } from "react-router-dom";
import type { BoardRequest } from "../../type/Board";
import { useState } from "react";

const BoardForm = ({ boardForm }: { boardForm: BoardRequest | null }) => {
    const navigate = useNavigate();
    const [ form, setForm ] = useState<BoardRequest>({
        title: "", 
        content: "",
    });
    const [ submitting, setSubmitting ] = useState(false);
    const [ error, setError ] = useState<string | null>(null);

    const handleSubmit = async () => {
        setSubmitting(true);
        setError(null);

        try {
            const body: BoardRequest = {
                title: form.title, 
                content: form.content,
            }

            console.log(body);

            const res = await fetch("http://localhost:8080/api/board", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(body), 
            });
            
            if (res.ok) {
                navigate("/");
            } else {
                setError(`送信に失敗しました（${res.status}）`);
            }

        } catch (e) {
            setError("ネットワークエラー発生");
        } finally {
            setSubmitting(false);
        }

    }

    return (
        <div className="max-w-2xl mx-auto py-6 px-4">
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">

                {/* ヘッダー */}
                <div className="px-5 py-4 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">新規投稿</p>
                </div>

                <div className="p-5">
                    {/* エラー表示 */}
                    {error && (
                        <div className="mb-4 px-3 py-2 bg-red-50 border border-red-100 rounded-lg">
                            <p className="text-xs text-red-600">{error}</p>
                        </div>
                    )}

                    {/* タイトル */}
                    <div className="mb-4">
                        <label className="block text-xs text-gray-400 mb-1.5">タイトル</label>
                        <input
                            type="text"
                            value={form.title}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                            className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-400 transition-colors"
                            placeholder="タイトルを入力してください"
                        />
                    </div>

                    {/* 内容 */}
                    <div className="mb-5">
                        <label className="block text-xs text-gray-400 mb-1.5">内容</label>
                        <textarea
                            rows={6}
                            value={form.content}
                            onChange={(e) => setForm({ ...form, content: e.target.value })}
                            className="w-full text-sm text-gray-900 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-400 transition-colors resize-y"
                            placeholder="内容を入力してください"
                        />
                    </div>

                    {/* ボタンエリア */}
                    <div className="flex justify-end gap-2">
                        <button
                            onClick={() => navigate("/")}
                            className="text-xs text-gray-500 border border-gray-200 rounded-lg px-3.5 py-1.5 hover:bg-gray-50 transition-colors"
                        >
                            キャンセル
                        </button>
                        <button
                            onClick={handleSubmit}
                            // disabled={submitting || !form.title.trim() || !form.content.trim()}
                            className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-lg px-4 py-1.5 hover:bg-blue-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            {submitting ? "送信中..." : "投稿する"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardForm;