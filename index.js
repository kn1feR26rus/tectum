$(document).ready(function () {
  const imgUrlBTC = "/assets/BTC.svg";
  const imgUrlUSDT = "/assets/USDT.svg";
  const imgUrlLTC = "/assets/LTC.svg";
  const dropMenu = $(".table_title-menu");
  const validation = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
  const email = $("#email");
  const emailEnter = $("#email_enter");
  const burgerBtn = $(".header_nav");
  const data = [
    {
      img: imgUrlBTC,
      name: "Bitcoin",
      block: "1234",
      hash: "hash",
      summ: 3.71,
      abbr: "BTC",
    },
    {
      img: imgUrlLTC,
      name: "Litecoin",
      block: "1234",
      hash: "hash",
      summ: 1111,
      abbr: "LTC",
    },
    {
      img: imgUrlUSDT,
      name: "Ethereum",
      block: "1234",
      hash: "hash",
      summ: 0.2213,
      abbr: "USDT",
    },
    {
      img: imgUrlBTC,
      name: "Bitcoin",
      block: "block",
      hash: "hash",
      summ: 0.666,
      abbr: "BTC",
    },
    {
      img: imgUrlBTC,
      name: "Bitcoin",
      block: "block",
      hash: "hash",
      summ: 446,
      abbr: "BTC",
    },
    {
      img: imgUrlUSDT,
      name: "Ethereum",
      block: "block",
      hash: "hash",
      summ: 231,
      abbr: "USDT",
    },
    {
      img: imgUrlBTC,
      name: "Bitcoin",
      block: "block",
      hash: "hash",
      summ: 0.44,
      abbr: "BTC",
    },
    {
      img: imgUrlBTC,
      name: "Bitcoin",
      block: "block",
      hash: "hash",
      summ: 1.123,
      abbr: "BTC",
    },
    {
      img: imgUrlLTC,
      name: "Litecoin",
      block: "block",
      hash: "hash",
      summ: 0.2213,
      abbr: "LTC",
    },
    {
      img: imgUrlBTC,
      name: "Bitcoin",
      block: "block",
      hash: "hash",
      summ: 0.3413,
      abbr: "BTC",
    },
  ];

  const container = $("#table_data");
  const dateNow = new Date();
  const currentDate =
    dateNow.getFullYear() +
    "/" +
    (dateNow.getMonth() + 1) +
    "/" +
    dateNow.getDate() +
    "   " +
    dateNow.getHours() +
    ":" +
    dateNow.getMinutes() +
    ":" +
    dateNow.getSeconds();

  function pushData(data) {
    const newData = `<div class="table_body-container">
                        <div style="width: 109px;"><img src='${data.img}'> ${data.name}</div>
                        <div style="width: 100px;"> ${data.block}</div>
                        <div style="width: 411px;"> ${data.hash} <button class="copy_btn grabbing">ASD</button></div>
                        <div style="width: 135px;"> ${data.summ}</div>
                        <div style="width: 118px;"><img src='${data.img}'>    ${data.abbr}</div>
                        <div style="width: 239px;">${currentDate}</div>
                    </div>`;
    $(newData).appendTo(container);
  }

  $.each(data, function (i) {
    const cortData = data[i];
    pushData(cortData);
  });
  //add filtered items
  $(".table_title-menu").click(function (event) {
    function filterData() {
      const target = event.target;
      $(".table_body-container").remove();
      const filteredData = data.filter((i) => i.abbr == $(target).text());
      $.each(filteredData, function (i) {
        const filterByAbbr = filteredData[i];
        pushData(filterByAbbr);
        $(".openDrop").text(filterByAbbr.abbr);
      });
    }
    filterData();
  });
  //toggle dropbox
  $(document).on("click", function (e) {
    const target = e.target;
    if (!$(dropMenu).hasClass("active") && $(target).hasClass("openDrop")) {
      $(dropMenu).show();
      $(dropMenu).addClass("active");
    } else {
      $(dropMenu).hide();
      $(dropMenu).removeClass("active");
    }
  });

  $(".header_registr").on("click", function () {
    $(".background").show();
    $(".modal_registr").show();
    $("html, body").css("overflow", "hidden");
  });

  $(".grabbing").mousedown(function () {
    $(".grabbing").css("cursor", "grabbing");
  });

  $(document).mouseup(function () {
    $(".grabbing").css("cursor", "pointer");
  });

  $(".close_modal").on("click", function () {
    $(".background, .modal_registr, .modal_enter").hide();
    $("html, body").css("overflow", "auto");
  });

  $(".header_switch-btn").on("click", function () {
    $(".table, .explorer").css("background-color", "black");
  });

  $(".header_autorization").on("click", function () {
    $(".background, .modal_enter").show();
  });

  email.blur(function () {
    if (email.val() != "") {
      if (email.val().search(validation) == 0) {
        $("#submit").attr("disabled", false);
        $("#error").hide();
      } else {
        $("#error").text("Неверно указан email!");
        $("#submit").attr("disabled", true);
        $("#submit").css("margin-top", "12px");
      }
    } else {
      $("#error").text("Поле e-mail не должно быть пустым!");
      $("#submit").css("margin-top", "12px");
      $("#submit").attr("disabled", true);
    }
  });

  emailEnter.blur(function () {
    if (emailEnter.val() != "") {
      if (emailEnter.val().search(validation) == 0) {
        $("#submit_enter").attr("disabled", false);
        $("#error_enter").hide();
      } else {
        $("#error_enter").text("Неверно указан email!");
        $("#submit_enter").attr("disabled", true);
        $("#submit_enter").css("margin-top", "12px");
      }
    } else {
      $("#error_enter").text("Поле e-mail не должно быть пустым!");
      $("#submit_enter").css("margin-top", "12px");
      $("#submit_enter").attr("disabled", true);
    }
  });

  $(".background").on("click", function () {
    $(
      ".modal_enter, .modal_registr, #burger_menu, .background, #burger_menu"
    ).hide();
    if ($(window).width() < 890) {
      $(burgerBtn).show();
    }
  });

  $("#submit_enter").on("click", function () {
    $(".modal_enter, .background").hide();
  });

  $("#submit").on("click", function () {
    $(".modal_registr").hide();
    $(".background").hide();
  });

  if ($(window).width() > 890) {
    $("#explorer_search-input").attr(
      "placeholder",
      "Хэш, Нода ID, Блокчейн ID, Транзакция или Кошелек"
    );
  } else {
    $("#explorer_search-input").attr("placeholder", "Search");
  }

  $(window).on("resize", function () {
    var win = $(this);
    if (win.width() > 890) {
      $("#explorer_search-input").attr(
        "placeholder",
        "Хэш, Нода ID, Блокчейн ID, Транзакция или Кошелек"
      );
    } else {
      $("#explorer_search-input").attr("placeholder", "Search");
    }
  });

  if ($(window).width() < 890) {
    $(burgerBtn).show();
  }

  $(burgerBtn).on("click", function () {
    $(burgerBtn).hide();
    $(".background, #burger_menu, .burger_show, .burger_language").show();
    $('body').css('overflow-y', 'hidden')
  });

  $(".burger_close").on("click", function () {
    $("#burger_menu").hide();
    $(burgerBtn).show();
  });
});
