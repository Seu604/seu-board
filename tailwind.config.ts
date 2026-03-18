import type { Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",   // TSX 파일까지 모두 스캔
    ],
    theme: {
        extend: {},   // 나중에 커스텀 색상·폰트 등 여기 추가
    },
    plugins: [],
} satisfies Config