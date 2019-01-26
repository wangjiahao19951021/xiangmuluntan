
init ()

function init () {
    getBanners(renderBanners)
}

function getBanners (callback) {
    $.ajax({
        url: '/api/v1/banners',
        success: function (results) {
            if (results.data) {
                let banner = results.data
                callback(banner)
            }
        }
    })
}

function renderBanners (banner) {
    let indicators = ''
    let items = ''
    banner.forEach ( (item, i) => {
        indicators += `<li data-target="#carousel-example-generic" data-slide-to="${i}" class="${i === 0 ? 'active': ''}"></li>`
        items += `<div class="item ${i === 0 ? 'active' : ''}">
        <img class="img-responsives center-block" src="${item.imgUrl}" alt="" title='${item.title}'>
      </div>`
    })
    $(".carousel-indicators").html(indicators);
    $(".carousel-inner").html(items)
}