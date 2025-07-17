# React + Vite

/your-education-skills  (Thư mục gốc của dự án)
├── .git/               // Thư mục của Git
├── .gitignore          // Các file/folder được Git bỏ qua
├── README.md           // File giới thiệu tổng quan về dự án
|
├── 📁 client/            // Chứa toàn bộ mã nguồn của Frontend (Next.js)
│   ├── 📁 components/      // Chứa các component React tái sử dụng
│   │   ├── 📁 ui/           // Các component giao diện nhỏ, cơ bản (Button, Input, Card...)
│   │   ├── 📁 layout/       // Các component cấu trúc trang (Header, Footer, Sidebar, Layout...)
│   │   └── 📁 course/       // Các component liên quan đến khóa học (CourseCard, CourseList...)
│   │
│   ├── 📁 context/        // Quản lý trạng thái toàn cục (e.g., AuthContext để biết user đã đăng nhập chưa)
│   │   └── AuthContext.js
│   │
│   ├── 📁 hooks/          // Chứa các custom hooks (e.g., useAuth, useApi...)
│   │
│   ├── 📁 lib/            // Chứa các hàm hỗ trợ, cấu hình thư viện (e.g., cấu hình axios)
│   │   └── axios.js
│   │
│   ├── 📁 pages/          // Hệ thống routing của Next.js, mỗi file là một trang
│   │   ├── 📁 api/          // API routes của Next.js (ít dùng khi có server riêng)
│   │   ├── 📁 courses/
│   │   │   └── [id].js     // Trang chi tiết khóa học, e.g., /courses/khoa-hoc-react
│   │   ├── _app.js         // Component App gốc, bọc ngoài tất cả các trang
│   │   ├── _document.js    // Tùy chỉnh cấu trúc HTML của trang
│   │   ├── index.js        // Trang chủ
│   │   ├── login.js        // Trang đăng nhập
│   │   └── register.js     // Trang đăng ký
│   │
│   ├── 📁 public/         // Chứa các file tĩnh (ảnh, icon, font chữ...)
│   │   ├── favicon.ico
│   │   └── logo.svg
│   │
│   ├── 📁 styles/         // Chứa các file CSS/SCSS
│   │   └── globals.css
│   │
│   ├── .env.local          // Các biến môi trường cho client (URL của API server...)
│   ├── package.json        // Quản lý các gói thư viện và script cho client
│   └── tailwind.config.js  // File cấu hình TailwindCSS (nếu dùng)
│
└── 📁 server/           // Chứa toàn bộ mã nguồn của Backend (NodeJS)
    ├── 📁 prisma/           // Thư mục của Prisma ORM
    │   ├── schema.prisma   // Nơi bạn định nghĩa các model cho cơ sở dữ liệu
    │   └── migrations/     // Lịch sử các thay đổi của cơ sở dữ liệu
    │
    ├── 📁 src/              // Thư mục chứa mã nguồn chính của server
    │   ├── 📁 api/            // (Hoặc có thể tên là 'routes') Định nghĩa các API endpoints
    │   │   ├── auth.routes.js
    │   │   ├── course.routes.js
    │   │   └── index.js      // File tổng hợp tất cả các routes
    │   │
    │   ├── 📁 config/         // Chứa các file cấu hình (kết nối DB, biến môi trường...)
    │   │   └── index.js
    │   │
    │   ├── 📁 controllers/    // Chứa logic xử lý request và trả về response
    │   │   ├── auth.controller.js
    │   │   └── course.controller.js
    │   │
    │   ├── 📁 middlewares/    // Chứa các hàm trung gian (xác thực token, xử lý lỗi...)
    │   │   ├── auth.middleware.js
    │   │   └── errorHandler.middleware.js
    │   │
    │   ├── 📁 services/       // Chứa các logic nghiệp vụ phức tạp, tương tác với DB
    │   │   ├── auth.service.js
    │   │   └── course.service.js
    │   │
    │   └── 📁 utils/          // Chứa các hàm tiện ích nhỏ (mã hóa mật khẩu, tạo token...)
    │       └── password.util.js
    │
    ├── .env                // Các biến môi trường cho server (chuỗi kết nối DB, JWT secret...)
    ├── app.js              // (Hoặc server.js, index.js) File khởi tạo Express app
    └── package.json        // Quản lý các gói thư viện và script cho server
