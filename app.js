(function () {
  "use strict";

  var data = window.RECOGNITION_DATA;
  var state = {
    monthSlug: getMonthFromHash() || data.currentMonth,
    memberIndex: 0
  };

  var monthKicker = document.getElementById("monthKicker");
  var monthTitle = document.getElementById("monthTitle");
  var memberTabs = document.getElementById("memberTabs");
  var recognitionView = document.getElementById("recognitionView");
  var criteriaGrid = document.getElementById("criteriaGrid");
  var archiveList = document.getElementById("archiveList");
  var imageDialog = document.getElementById("imageDialog");
  var dialogImage = document.getElementById("dialogImage");
  var closeDialog = document.getElementById("closeDialog");
  var menuButton = document.getElementById("menuButton");
  var mainNav = document.getElementById("mainNav");

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getMonthFromHash() {
    var match = window.location.hash.match(/thang=([0-9]{4}-[0-9]{2})/);
    return match ? match[1] : "";
  }

  function getCurrentMonth() {
    return (
      data.months.find(function (month) {
        return month.slug === state.monthSlug;
      }) || data.months[0]
    );
  }

  function setMonth(slug, shouldScroll) {
    var exists = data.months.some(function (month) {
      return month.slug === slug;
    });

    state.monthSlug = exists ? slug : data.currentMonth;
    state.memberIndex = 0;
    renderMonth();
    renderArchive();

    if (shouldScroll) {
      document.getElementById("guong-sang").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  function renderMonth() {
    var month = getCurrentMonth();
    var member = month.members[state.memberIndex] || month.members[0];

    monthKicker.textContent =
      "01 — " +
      String(month.members.length).padStart(2, "0") +
      " GƯƠNG SÁNG · THÁNG " +
      month.month;
    monthTitle.textContent = month.title;

    memberTabs.innerHTML = month.members
      .map(function (item, index) {
        var active = index === state.memberIndex;
        return (
          '<button class="member-tab' +
          (active ? " active" : "") +
          '" type="button" data-member-index="' +
          index +
          '" aria-pressed="' +
          active +
          '">' +
          '<span class="member-initials">' +
          escapeHtml(item.initials) +
          "</span>" +
          "<span><strong>" +
          escapeHtml(item.name) +
          "</strong><small>" +
          escapeHtml(item.department) +
          "</small></span>" +
          "</button>"
        );
      })
      .join("");

    memberTabs.querySelectorAll("[data-member-index]").forEach(function (button) {
      button.addEventListener("click", function () {
        state.memberIndex = Number(button.getAttribute("data-member-index"));
        renderMonth();
      });
    });

    if (member.boardImage) {
      recognitionView.innerHTML =
        '<div class="recognition-summary">' +
        '<p class="recognition-number">GƯƠNG SÁNG ' +
        String(state.memberIndex + 1).padStart(2, "0") +
        " / " +
        String(month.members.length).padStart(2, "0") +
        "</p>" +
        "<h3>" +
        escapeHtml(member.name) +
        "</h3>" +
        '<p class="recognition-meta">' +
        escapeHtml(member.meta) +
        " · Tháng " +
        escapeHtml(month.month) +
        "/" +
        escapeHtml(month.year) +
        "</p>" +
        '<p class="recognition-achievement">' +
        escapeHtml(member.achievement) +
        "</p>" +
        "<p class=\"image-note\">Nhấp vào ảnh để xem kích thước lớn.</p>" +
        "</div>" +
        '<button class="board-button" type="button" id="openBoard">' +
        '<img src="' +
        escapeHtml(member.boardImage) +
        '" alt="Bảng ghi nhận của ' +
        escapeHtml(member.name) +
        '" />' +
        '<span>Xem ảnh lớn ↗</span>' +
        "</button>";

      document.getElementById("openBoard").addEventListener("click", function () {
        dialogImage.src = member.boardImage;
        dialogImage.alt = "Bảng ghi nhận của " + member.name;
        if (typeof imageDialog.showModal === "function") {
          imageDialog.showModal();
        }
      });
    } else {
      recognitionView.innerHTML =
        '<div class="recognition-summary">' +
        '<p class="recognition-number">GƯƠNG SÁNG ' +
        String(state.memberIndex + 1).padStart(2, "0") +
        " / " +
        String(month.members.length).padStart(2, "0") +
        "</p>" +
        "<h3>" +
        escapeHtml(member.name) +
        "</h3>" +
        '<p class="recognition-meta">' +
        escapeHtml(member.meta) +
        " · Tháng " +
        escapeHtml(month.month) +
        "/" +
        escapeHtml(month.year) +
        "</p>" +
        '<p class="recognition-achievement">' +
        escapeHtml(member.achievement) +
        "</p>" +
        "</div>" +
        '<div class="empty-board">' +
        '<span aria-hidden="true">＋</span>' +
        "<strong>Chưa cập nhật ảnh bảng ghi nhận</strong>" +
        "<p>Đặt ảnh vào thư mục assets/recognition và khai báo đường dẫn trong data.js.</p>" +
        "</div>";
    }
  }

  function renderCriteria() {
    criteriaGrid.innerHTML = data.criteria
      .map(function (criterion, index) {
        var items = criterion.items
          .map(function (item) {
            return (
              "<li>" +
              '<span class="criterion-item-number">' +
              escapeHtml(item[0]) +
              "</span>" +
              "<p><strong>" +
              escapeHtml(item[1]) +
              "</strong><small>" +
              escapeHtml(item[2]) +
              "</small></p>" +
              "</li>"
            );
          })
          .join("");

        return (
          '<details class="criterion-card"' +
          (index === 0 ? " open" : "") +
          ">" +
          "<summary>" +
          '<span class="criterion-number">' +
          escapeHtml(criterion.number) +
          "</span>" +
          '<span class="criterion-symbol" aria-hidden="true">' +
          escapeHtml(criterion.symbol) +
          "</span>" +
          "<span><strong>" +
          escapeHtml(criterion.title) +
          "</strong><small>" +
          escapeHtml(criterion.japanese) +
          "</small></span>" +
          '<span class="criterion-toggle" aria-hidden="true">＋</span>' +
          "</summary>" +
          '<div class="criterion-body">' +
          "<p>" +
          escapeHtml(criterion.description) +
          "</p>" +
          "<ol>" +
          items +
          "</ol>" +
          "</div>" +
          "</details>"
        );
      })
      .join("");
  }

  function renderArchive() {
    archiveList.innerHTML = data.months
      .map(function (month) {
        var active = month.slug === state.monthSlug;
        var names = month.members
          .map(function (member) {
            return member.name;
          })
          .join(" · ");

        return (
          '<a class="archive-row' +
          (active ? " active" : "") +
          '" href="#thang=' +
          escapeHtml(month.slug) +
          '" data-month="' +
          escapeHtml(month.slug) +
          '">' +
          '<span class="archive-date"><small>THÁNG</small><strong>' +
          escapeHtml(month.month) +
          '</strong><em>' +
          escapeHtml(month.year) +
          "</em></span>" +
          '<span class="archive-count"><strong>' +
          String(month.members.length).padStart(2, "0") +
          "</strong><small>người/nhóm<br />được vinh danh</small></span>" +
          '<span class="archive-names"><small>THÀNH VIÊN ĐƯỢC VINH DANH</small><strong>' +
          escapeHtml(names) +
          "</strong></span>" +
          '<span class="archive-arrow" aria-hidden="true">→</span>' +
          "</a>"
        );
      })
      .join("");

    archiveList.querySelectorAll("[data-month]").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        var slug = link.getAttribute("data-month");
        history.replaceState(null, "", "#thang=" + slug);
        setMonth(slug, true);
      });
    });
  }

  menuButton.addEventListener("click", function () {
    var expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("open", !expanded);
  });

  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menuButton.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("open");
    });
  });

  closeDialog.addEventListener("click", function () {
    imageDialog.close();
  });

  imageDialog.addEventListener("click", function (event) {
    if (event.target === imageDialog) {
      imageDialog.close();
    }
  });

  window.addEventListener("hashchange", function () {
    var slug = getMonthFromHash();
    if (slug) {
      setMonth(slug, false);
    }
  });

  renderCriteria();
  setMonth(state.monthSlug, false);
})();
