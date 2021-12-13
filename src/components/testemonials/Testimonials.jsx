import "./testimonials.scss";

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: "KEC",
            title: "A Engineering Student",
            img:
                "assets/student.jpg",
            icon: "",
            desc:
                "I Found This Blog In 4th Year, I Want To Study Engineering Again",
            url:"https://bctengineeringnotes.blogspot.com/"
        },
        {
            id: 2,
            name: "Govinda Gyawali",
            title: "Founder Of Elucid Consultant & Nepal's First Nlp Trainer",
            img:
                "assets/GobindaDai.jpg",
            icon: "",
            desc:
                "It was real pleasure working with  Ashish, I look forward to working In The Future",
            url:"https://www.elucidconsultants.com/",
            featured: true,
        },
        {
            id: 3,
            name: "Hans Nepal Trading Concern",
            title: "CEO of Hans",
            img:
                "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "",
            desc:
                "It was a great experince working with Ashish, He created A fully functioning website for Us and I look forward to working with him again",
            url:'https://www.mojanepal.com'
        },
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>

            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}
                    onClick={() => window.open(d.url)}
                    >
                        <div className="top">

                            <img src="assets/" className="left" alt="" />

                            <img
                                className="user"
                                src={d.img}
                                alt=""
                            />
                            <img className="right" src={d.icon} alt="" />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}