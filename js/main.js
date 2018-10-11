console.log('Starting up');

var gProjs = [
    {
        id: 'minesweeper',
        name: 'Minesweeper',
        title: 'Find all the mines and flag them.',
        desc: 'A very complex game that is very enjoyable to play.',
        url: 'projs/mineseaper',
        publishedAt: 'October 2',
        labels: ["Matrixes", "keyboard events"],
        imgPreview: 'img/portfolio/02-thumbnail.jpg',
        imgFull: 'img/portfolio/02-full.jpg',
        category: 'Games'
    },
    {
        id: 'touch-nums',
        name: 'Touch Nums',
        title: 'Touch the nums by their order (1,2,3) in the shortest time possible.',
        desc: 'A simple game that is suitble for all ages.',
        url: 'projs/touch-nums',
        publishedAt: 'September 15',
        labels: ["Matrixes", "keyboard events"],
        imgPreview: 'img/portfolio/03-thumbnail.jpg',
        imgFull: 'img/portfolio/03-full.jpg',
        category: 'Games'
    }
]



function initPage() {
    console.log('hey');
    renderProjs();

}

function renderProjs() {
    var elPortfolioContainer = document.querySelector('#portfolio-container');
    
    var strHtmlPreviews = '';

    for (var i = 0; i < gProjs.length; i++) {
        var proj = gProjs[i];
        strHtmlPreviews += `
    <div class="col-md-4 col-sm-6 portfolio-item">
          <a onclick="projClicked(${i})" class="portfolio-link" data-toggle="modal" href="#portfolioModal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src=${proj.imgPreview} alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.desc}</p>
          </div>
        </div>
        `;
    }
    elPortfolioContainer.innerHTML = strHtmlPreviews;
}


function projClicked(idx) {
    console.log(idx);
    $('#modal-name').text(gProjs[idx].name);
    $('#modal-title').text(gProjs[idx].title);
    $('#modal-desc').text(gProjs[idx].desc);
    $('#modal-date').text(gProjs[idx].publishedAt);
    $('#modal-category').text(gProjs[idx].category);
    $('#modal-desc').text(gProjs[idx].desc);
    $('#modal-desc').text(gProjs[idx].desc);
}


function sendForm() {
    var subject = document.querySelector('#exampleInputName2').value;
    var email = document.querySelector('#exampleInputEmail2').value;
    var body = document.querySelector('#exampleInputbody2').value;
    window.location = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
}