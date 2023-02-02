let userSearch = {
    page: 1,
    searchObj: {},
    init() {
        this.request();
    },
    request() {
        if (document.querySelector('.users')) document.querySelector('.users').remove();
        if (document.querySelector('.pagination')) document.querySelector('.pagination').remove();
        let request;
        if(window.XMLHttpRequest)
            request = new XMLHttpRequest();
        else {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        let url = new URL('https://reqres.in/api/users')
        if (userSearch.page === 2) url.searchParams.set('page', this.page);
        request.open("GET", url);
        request.responseType = "json";
        request.onload = function () {
            if (request.status === 200) {
                userSearch.searchObj = request.response.data;
                userSearch.sortUsersByName()
                userSearch.createUserCards()
                userSearch.createPagination()
            }
            else console.warn('request error')
        }
        request.send();

    },
    sortUsersByName() {
        let sortProp = 'first_name';
        this.searchObj.sort(function(a, b) {
            if (a[sortProp] > b[sortProp]) {
                return 1;
            }
            if (a[sortProp] < b[sortProp]) {
                return -1;
            }
            return 0;
        })
    },
    createUserCards() {
        let newBlock = document.createElement('div');
        newBlock.classList.add('users');
        let str = '';
        for (let elem of this.searchObj) {
            str +=  '    <div class="user_block">\n' +
                    '        <img src="'+ elem.avatar +'" alt="N/A">\n' +
                    '        <div class="info_block">\n' +
                    '            <p class="user_first_name">'+ elem.first_name +'</p>\n' +
                    '            <p class="user_last_name">'+ elem.last_name +'</p>\n' +
                    '            <p class="user_id">id = '+ elem.id +'</p>\n' +
                    '            <p class ="user_email">'+ elem.email +'</p>' +
                    '        </div>\n' +
                    '    </div>'
        }
        newBlock.innerHTML = str;
        document.body.appendChild(newBlock);
    },
    createPagination() {
        let newBlock = document.createElement('div');
        newBlock.classList.add('pagination');
        newBlock.innerHTML = '<div>1</div><div>2</div>'
        document.body.appendChild(newBlock);
        document.querySelector('.pagination').addEventListener('click', this.switchPages)
    },
    switchPages(e) {
        if (+e.target.innerHTML !== userSearch.page) {
            userSearch.page = +e.target.innerHTML;
            userSearch.request();
        }
    }
}