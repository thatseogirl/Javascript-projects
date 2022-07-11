const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userName = document.querySelector('.username')
const user = document.querySelector('.user')
const userImage = document.querySelector('.user-image')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Seun Ademola',
        rol: 'CTO',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        text: 'Lorem ipsum dolor sit amet consectetu adipisicing elit. Laudantium sapiente nemo provident sequi distinctio exercitationem debitis quos facere alias maiores ametrecusandae maxime aut consectetur, dolore porro voluptate repellendus ad saepe expedita quas eaque esse minima fugiat.Deserunt accusamus maxime delectus nihil totam placeat voluptatum. Voluptate quis corporis minus sapiente'
    },
    {
        name: 'Dayo Bashorun',
        rol: 'Full-stack Developer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        text: 'Lorem ipsum dolor sit amet consectetu adipisicing elit. Laudantium sapiente nemo provident sequi distinctio exercitationem debitis quos facere alias maiores ametrecusandae maxime aut consectetur, dolore porro voluptate repellendus ad saepe expedita quas eaque esse minima fugiat.Deserunt accusamus maxime delectus nihil totam placeat voluptatum. Voluptate quis corporis minus sapiente'
    },
    {
        name: 'Yemi Adenuga',
        rol: 'Software Engineer',
        image: 'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        text: 'Lorem ipsum dolor sit amet consectetu adipisicing elit. Laudantium sapiente nemo provident sequi distinctio exercitationem debitis quos facere alias maiores ametrecusandae maxime aut consectetur, dolore porro voluptate repellendus ad saepe expedita quas eaque esse minima fugiat.Deserunt accusamus maxime delectus nihil totam placeat voluptatum. Voluptate quis corporis minus sapiente'
    },
    {
        name: 'Maria Fayemi',
        rol: 'UI/UX',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        text: 'Lorem ipsum dolor sit amet consectetu adipisicing elit. Laudantium sapiente nemo provident sequi distinctio exercitationem debitis quos facere alias maiores ametrecusandae maxime aut consectetur, dolore porro voluptate repellendus ad saepe expedita quas eaque esse minima fugiat.Deserunt accusamus maxime delectus nihil totam placeat voluptatum. Voluptate quis corporis minus sapiente'
    }
]

let idx = 0

function updateTestimonial() {
    console.log(testimonials[1])
    const { name, rol, image, text } = testimonials[idx];
    testimonial.innerHTML = text
    userName.innerHTML = name
    userImage.src = image
    role.innerHTML = rol

    idx++

    if (idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)