import lilly from '@/assets/images/lilly.png'
import bella from '@/assets/images/bella.png'
import briyan from '@/assets/images/briyan.png'

// tips image
import tips1 from '@/assets/images/Tips1.png'
import tips2 from '@/assets/images/Tips2.png'
import tips3 from '@/assets/images/Tips3.png'

//image Gallary 
import gallary1 from '@/assets/images/gallary1.png'
import gallary2 from '@/assets/images/gallary2.png'
import gallary3 from '@/assets/images/gallary3.png'
import gallary4 from '@/assets/images/sloganImage.png'
import gallary5 from '@/assets/images/gallary5.png'
import gallary6 from '@/assets/images/gallary6.png'
import gallary7 from '@/assets/images/gallary7.png'
import gallary8 from '@/assets/images/gallary8.png'
import gallary9 from '@/assets/images/gallary9.png'

// GEt in Touch Images
import Location from '@/assets/images/Location.svg'
import Call from '@/assets/images/Call.svg'
import Mail from '@/assets/images/Mail.svg'


export const cardList = [{
    id: 1,
    nane: 'Briyan Nevalli',
    designation: 'Surgeon',
    img: briyan,
    about: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.'"
},
{
    id: 2,
    nane: 'Bella sebastian',
    designation: 'Dermatologist',
    img: bella,
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloremque inventore."
},
{

    id: 3,
    nane: 'Lilly Adams',
    designation: 'Stylist expert',
    img: lilly,
    about: "Rem alias sed eius incidunt! Adipisci omnis consectetur adipisicing scelerisque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate odio maxime iste error exercitationem dignissimos. Minima optio sunt iure. Iure explicabo at nisi cupiditate quidem tempore doloremque inventore ea? Blanditiis."
},
]
export const tips = [{
    id: 1,
    tip: 'Beauty Consultation',
    title: 'We services beauty consultation',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.',
    img: tips1,

},
{
    id: 2,
    tip: 'Skin Treatements',
    title: 'Skin care and treatment by expert',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.',
    img: tips2,

},
{
    id: 3,
    tip: 'Beauty Product',
    title: 'We present quality beauty products',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.',
    img: tips3,

},
]
export const imageGallary = [gallary1, gallary2, gallary3, gallary4, gallary5, gallary6, gallary7, gallary8, gallary9]

export const Faq = [
    {
        id: 1,
        quetion: "Is beauty consultation handled thoroughly?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
        isOpen: true
    },
    {
        id: 2,
        quetion: "Can I be beautiful in an instant time?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
        isOpen: false
    },
    {
        id: 3,
        quetion: "Are there any side effects to the treatment methods or treatments at this clinic?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
        isOpen: false
    },
    {
        id: 4,
        quetion: "Do professionals have accreditation in their respective fields?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
        isOpen: false
    }
]

export const GetInTouch = [
    {
        id: 1,
        headig: 'Address',
        title: '101 Baker Street, NY ',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
        icon: Location
    },
    {
        id: 2,
        headig: 'Phone',
        title: '+896 120 5889 ',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
        icon: Call
    },
    {
        id: 3,
        headig: 'Mail',
        title: 'mail@company.com',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
        icon: Mail
    }
]