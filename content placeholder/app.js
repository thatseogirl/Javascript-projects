const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImage = document.getElementById('profile_img')
const userName = document.getElementById('name')
const date = document.getElementById('date')
const animatedBackgrounds = document.querySelectorAll('.animated-bg')
const animatedTexts = document.querySelectorAll('.animated-bg-text ')

setTimeout(getData, 1500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="laptop"/>'
    title.innerHTML = 'Content Placeholder'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, numquam.'
    profileImage.innerHTML = '<img src="https://randomuser.me/api/portraits/men/40.jpg"/>'
    userName.innerHTML = 'Jonh Doe'
    date.innerHTML = 'Oct 27, 2022'

    animatedBackgrounds.forEach(background => background.classList.remove('animated-bg'))
    animatedTexts.forEach(text => text.classList.remove('animated-bg-text')) 
}
