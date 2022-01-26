if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready()
}

function ready() {
    (function () {
        'use strict';
        const btn = document.getElementById('btn');
        const nav = document.getElementById('navbar-box');
        btn.addEventListener('click', function() {
            nav.classList.toggle('show');
        })
    })();
    
    (function () {
        'use strict';
        const cart = document.querySelector('.icon #cart');
        const product = document.querySelector(".cart");cart.addEventListener("click", function(event) {
          product.classList.toggle('move');
        });
    })();
    
    
    
    (function () {
        'use strict';
        const removeCartItemBtn = document.getElementsByClassName('remove')
        for (let i = 0; i < removeCartItemBtn.length; i++) {
            const button = removeCartItemBtn[i]
            console.log(button);
            button.addEventListener('click', removeCartItem)
        }

        let qtyInp = document.getElementsByClassName('cart__quatity');
        for (let i = 0; i < qtyInp.length; i++) {
            const element = qtyInp[i];
            element.addEventListener('change', qtyChange);
        }

        let addCartBtn = document.getElementsByClassName('shop__item-btn');
        for (let i = 0; i < addCartBtn.length; i++) {
            const btns = addCartBtn[i];
            btns.addEventListener('click', addCartBtns);
        }

        
        document.getElementsByClassName('purchase')[0].addEventListener('click', purchaseBtnClick);

        function purchaseBtnClick() {
            alert('Thank for your purchase')
            let deleteCartPirchase = document.getElementsByClassName('cart__append-div')[0]

        }

        function removeCartItem(event) {
            let btnClicked = event.target
            btnClicked.parentElement.parentElement.remove()
            updateCartTotal()
        }

        function qtyChange(event) {
            let input = event.target;
            if (isNaN(input.value) || input.value <= 0) {
                input.value = 0
            }
            updateCartTotal()
        }

        function addCartBtns(event) {
            let buttons = event.target
            let shopItem = buttons.parentElement.parentElement
            let title = shopItem.getElementsByClassName('shop__item-name')[0].innerText
            let PriceItem = shopItem.getElementsByClassName('shop__item-price')[0].innerText
            console.log(PriceItem)
            let imageSrc = document.getElementsByClassName('shop__img')[0].src
            addItemToCart(PriceItem, title, imageSrc);
            updateCartTotal();
        }

        function addItemToCart(PriceItem, title,  imageSrc) {
            let cartRowItem = document.createElement('div')
            cartRowItem.classList.add('cart__row', 'mt-4')
            let cart_boxItem = document.getElementsByClassName('cart__box')[0]
            let cartItemTitle = document.getElementsByClassName('cart_item_title')
            // for (let i = 0; i < cartItemTitle.length; i++) {
            //     if (cartItemTitle[i].innerText == title) {
            //        alert('cart has been added already'); 
            //        return
            //     }
            // }

            let cartRowInnerText = `
            <div class="cart_img_item">
                <img src="${imageSrc}" class="rounded-circle rounded" style="width: 2.8rem; height: 2.8rem;" alt="">
                <span class="fs-3 fw-bold cart_item_title">${title}</span>
            </div>
            <span class="cart__price-tag fs-3 fw-bold ms-5 text-center">${PriceItem}.00</span>
            <div class="cart__input-remove ms-1">
                <input class="fs-3 fw-bold cart__quatity" type="number" value="0">
                <span class="fs-4 bg-dark text-light rounded remove">Remove</span>
            </div>
            `
            cartRowItem.innerHTML = cartRowInnerText
            cart_boxItem.append(cartRowItem)
            cartRowItem.getElementsByClassName('remove')[0].addEventListener('click', removeCartItem)
            cartRowItem.getElementsByClassName('cart__quatity')[0].addEventListener('change', qtyChange)
        }
    
        function updateCartTotal() {
            let cartItemWrapper = document.getElementsByClassName('cart__append-div')[0]
            let cartRows = cartItemWrapper.getElementsByClassName('cart__row')
            let total = 0
            for (let i = 0; i < cartRows.length; i++) {
                let cartRow = cartRows[i]
                let priceElem = cartRow.getElementsByClassName('cart__price-tag')[0]
                let qtyElem = cartRow.getElementsByClassName('cart__quatity')[0]
                let price = parseFloat(priceElem.innerText.replace('$', ''))
                let quatity = qtyElem.value
                total = total + (price * quatity)
            }
            total = Math.round(total * 100) / 100
            document.getElementsByClassName('updateCartTotal')[0].innerText = total;
        }
    
        updateCartTotal();
       
        //show total
        function showTotal() {
            const total = [];
            const items = document.querySelectorAll('.cart-item-price');
    
            items.forEach((item)=> {
                total.push(parseFloat(item.textContent));
            });
    
            const totalMoney = total.reduce((total,item) =>{
                return total + item;
            }, 0);
            const finalMoney = totalMoney.toFixed(2);
            
            document.getElementById('cart_total').textContent = finalMoney;
        }
        // clear all cart 
        const clearAllCart = document.querySelector('#clear__cart');
        
        clearAllCart.addEventListener('click', function(ev) {
            if(ev.target.classList.contains('clear-cart')) {
                const lis = ev.target.parentNode.parentNode.parentNode.parentNode;
                lis.remove(lis);
            }
        })
    })();
    
}
