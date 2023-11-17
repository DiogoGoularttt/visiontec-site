import React from "react";

import Header from '../../src/components/Header/header'
import MainSlider from '../../src/components/MainSlider/main-slider'
import Button from "../../src/components/Button";

import ImageTeste from "../../public/img/3.png"

import './home.css'
import useAuth from "../../src/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Home = () => {
    // const { signout } = useAuth();
    // const navigate = useNavigate();

    return (
        <>
            <section>
                <Header />
            </section>
            <section>
                <div className="slider">
                    <MainSlider />
                    {/* <img src={ImageTeste} alt="Imagem de teste" /> */}
                </div>
                <div className="conteudo">
                    <div className="teste">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ullam molestiae, recusandae possimus cupiditate numquam reprehenderit nostrum ipsum amet quasi fuga iste repudiandae doloremque, quae voluptatum officia culpa pariatur laudantium.

                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, aliquid ipsum. Alias adipisci eum tenetur deleniti hic tempora, dolore quas, iure dolores nostrum quia necessitatibus ipsa ut veritatis laboriosam numquam!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit, itaque perferendis quaerat possimus, voluptate eum recusandae fugiat sunt nesciunt iusto. Praesentium est quos necessitatibus quod quaerat laudantium esse eveniet?

                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia blanditiis qui voluptatem ipsum nihil. Et rem ratione saepe totam! Iusto consectetur soluta tempore laboriosam iure animi hic enim doloribus totam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus obcaecati dolorem culpa soluta nam dignissimos, reiciendis quae nobis ipsum sapiente! Optio voluptate sed neque officiis dolorum dignissimos laudantium nostrum iste!
                    </div>
                </div>

                {/* <div className="conteudo">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur placeat earum quidem dolores facere. Aliquam omnis veritatis totam, maiores consequuntur vero veniam, aliquid eligendi, nam aut quos. Rem, debitis!

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum in, excepturi distinctio officia id eum quis odio dolore aliquam, voluptatem, soluta est repudiandae placeat architecto obcaecati consectetur quo at dolorum?

                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quasi, ex temporibus repellat animi dolores nemo tenetur vel architecto pariatur illum eligendi officia quos, esse placeat, officiis culpa! Velit, numquam.lorem
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cupiditate aperiam neque pariatur hic, odit eveniet adipisci, quaerat facilis minima corrupti magnam ducimus numquam incidunt inventore nesciunt maxime veritatis enim?
                </div>

                <div className="conteudo">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur placeat earum quidem dolores facere. Aliquam omnis veritatis totam, maiores consequuntur vero veniam, aliquid eligendi, nam aut quos. Rem, debitis!

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum in, excepturi distinctio officia id eum quis odio dolore aliquam, voluptatem, soluta est repudiandae placeat architecto obcaecati consectetur quo at dolorum?

                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quasi, ex temporibus repellat animi dolores nemo tenetur vel architecto pariatur illum eligendi officia quos, esse placeat, officiis culpa! Velit, numquam.lorem
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cupiditate aperiam neque pariatur hic, odit eveniet adipisci, quaerat facilis minima corrupti magnam ducimus numquam incidunt inventore nesciunt maxime veritatis enim?
                </div> */}
            </section>
        </>
        // <div className="home">
        //     <Header />
        //     <MainSlider />
        //     <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        //         Sair
        //     </Button>
        // </div>
    )
}

export default Home;