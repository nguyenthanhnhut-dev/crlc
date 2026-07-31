/*
 * DỮ LIỆU WEBSITE
 * Chỉ cần chỉnh sửa file này khi cập nhật tháng mới.
 * Xem hướng dẫn chi tiết trong file HUONG-DAN-SU-DUNG.txt.
 */

window.RECOGNITION_DATA = {
  companyName: "CÔNG TY ABC",
  currentMonth: "2026-07",

  months: [
    {
      slug: "2026-07",
      month: "07",
      year: "2026",
      title: "Gương sáng tháng 07/2026",
      members: [
        {
          id: "phan-van-len",
          initials: "VL",
          name: "Phan Văn Len",
          department: "ĐIỆN PHÂN",
          meta: "Điện phân",
          achievement: "Thực hiện đề án cải tiến tại bộ phận.",
          boardImage: "assets/recognition/2026-07/phan-van-len.png"
        },
        {
          id: "le-thi-thuy-hang",
          initials: "TH",
          name: "Lê Thị Thúy Hằng",
          department: "JIG/Xuất nhập hàng",
          meta: "QA · Chất lượng",
          achievement: "Chuẩn hóa check sheet, giảm lỗi ghi nhận.",
          boardImage: ""
        },
        {
          id: "le-hoang-phuc",
          initials: "HP",
          name: "Lê Hoàng Phúc",
          department: "BẢO TRÌ",
          meta: "Bảo trì · An toàn",
          achievement: "Thiết kế cảnh báo trực quan tại các điểm rủi ro.",
          boardImage: ""
        },

      ]
    },
    {
      slug: "2026-06",
      month: "06",
      year: "2026",
      title: "Gương sáng tháng 06/2026",
      members: [
        {
          id: "tran-thi-lan-06",
          initials: "TL",
          name: "Trần Thị Lan",
          department: "QA",
          meta: "QA · Chất lượng",
          achievement: "Chuẩn hóa check sheet, giảm 32% lỗi ghi nhận.",
          boardImage: ""
        }
      ]
    },
    {
      slug: "2026-05",
      month: "05",
      year: "2026",
      title: "Gương sáng tháng 05/2026",
      members: [
        {
          id: "le-hoang-phuc-05",
          initials: "HP",
          name: "Lê Hoàng Phúc",
          department: "BẢO TRÌ",
          meta: "Bảo trì · An toàn",
          achievement: "Thiết kế cảnh báo trực quan tại 8 điểm rủi ro.",
          boardImage: ""
        }
      ]
    },
    {
      slug: "2026-04",
      month: "04",
      year: "2026",
      title: "Gương sáng tháng 04/2026",
      members: [
        {
          id: "nhom-kho-thanh-pham-04",
          initials: "KT",
          name: "Nhóm Kho thành phẩm",
          department: "LOGISTICS",
          meta: "Logistics · Hợp tác",
          achievement: "Rút ngắn 21 phút cho mỗi lượt xuất hàng.",
          boardImage: ""
        }
      ]
    }
  ],

  criteria: [
    {
      number: "01",
      symbol: "基",
      title: "Công việc cơ bản",
      japanese: "基礎作業",
      description: "Nền tảng nghiệp vụ cần thiết để thực hiện công việc chính xác.",
      items: [
        ["01", "Khả năng máy tính", "PC能力"],
        ["02", "Tiếng Nhật (đạt N5 trở lên)", "日本語（N5以上）"],
        ["03", "Làm TTCV", "作業要領書の作成"],
        ["04", "Làm biên bản hướng dẫn", "指導記録の作成"]
      ]
    },
    {
      number: "02",
      symbol: "管",
      title: "Quản lý bộ phận",
      japanese: "部署管理",
      description: "Năng lực hướng dẫn, giám sát, cải tiến và điều hành hằng ngày.",
      items: [
        ["05", "Hướng dẫn công việc cho người thao tác", "作業者への作業指導"],
        ["06", "Giám sát thao tác", "作業観察"],
        ["07", "Thực hiện đề án cải tiến", "改善提案の実施"],
        ["08", "Khả năng đào tạo cấp dưới", "部下への指導能力"],
        ["09", "Khả năng đối ứng sự cố", "異常対応能力"],
        ["10", "Sắp xếp nhân sự", "段取り（人）"],
        ["11", "Sắp xếp, quản lý hằng ngày", "段取り（日常管理）"]
      ]
    },
    {
      number: "03",
      symbol: "整",
      title: "3Q6S",
      japanese: "3Q6S",
      description: "Duy trì quản lý trực quan, 6S và môi trường làm việc an toàn.",
      items: [
        ["12", "Quản lý bảng ILUO", "ILUOボードの管理"],
        ["13", "Thực hiện, hướng dẫn hoạt động 6S", "6S活動の指導、実施"],
        ["14", "Hoạt động ATVSLĐ", "安全・衛生活動"]
      ]
    },
    {
      number: "04",
      symbol: "話",
      title: "Giao tiếp",
      japanese: "コミュニケーション",
      description: "Giao tiếp hiệu quả với đồng nghiệp và các cấp quản lý.",
      items: [
        ["15", "Cấp dưới / đồng nghiệp", "部下・同僚"],
        ["16", "Cấp trên", "上司"]
      ]
    }
  ]
};
