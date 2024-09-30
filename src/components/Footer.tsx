import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="footer mt-9">
            <div className="flex items-center justify-between mt-3 xs:px-4 md:px-14 2xl:px-20">
                <div className="flex items-center ">
                    <Image
                        src="/sky-logo.svg" // Ajuste o caminho conforme necessário
                        alt="Sky" // Texto alternativo para acessibilidade
                        className="SKY" // Utilize className ao invés de class
                        width={88} // Defina a largura sem 'px'
                        height={33} // Defina a altura sem 'px'
                    />



                </div>

                <div className="flex space-x-5 items-center cursor-pointer">
                    <Facebook />
                    <Twitter />
                    <Youtube />
                    <Instagram />

                </div>






            </div>

            <div className="line mt-4 mb-8">

            </div>

            <div className="flex xs:justify-start xs:items-start xs:flex-col 2xl:flex-row 2xl:justify-between xs:px-4 md:px-14 2xl:px-20">

                <div className="flex  flex-col">

                    <div className="flex gap-4">
                        <Image
                            src="/minha-sky.svg" // Ajuste o caminho conforme necessário
                            alt="Sky" // Texto alternativo para acessibilidade
                            className="SKY" // Utilize className ao invés de class
                            width={48} // Defina a largura sem 'px'
                            height={48} // Defina a altura sem 'px'
                        />

                        <small className="footer-title">Baixe no seu celular o app Minha SKY e divirta-se.</small>
                    </div>

                    <div className="flex gap-10 mt-8">

                        <Image
                            src="/button-apple-store-light-default.svg" // Ajuste o caminho conforme necessário
                            width={160} // Defina a largura sem 'px'
                            height={52} // Defina a altura sem 'px'
                        />


                        <Image
                            src="/button-google-play-light-default.svg" // Ajuste o caminho conforme necessário
                            width={160} // Defina a largura sem 'px'
                            height={52} // Defina a altura sem 'px'
                        />

                    </div>


                </div>

                <div className="flex flex-col xs:mt-10 2xl:mt-0">

                    <div className="flex">

                        <div className="flex flex-col gap-2">
                            <small className="footer-title mb-1">Sobre</small>

                            <small className="footer-caption">Nossa  história</small>
                            <small className="footer-caption">Imprensa</small>
                            <small className="footer-caption">Prêmios conquistados</small>
                            <small className="footer-caption">Credenciamento</small>
                            <small className="footer-caption">Trabalhe com a gente</small>
                            <small className="footer-caption">Promoção</small>

                        </div>

                        <div className="flex flex-col gap-2">
                            <small className="footer-title mb-1">Nossas responsabilidades</small>

                            <small className="footer-caption">Conselho aos usuários</small>
                            <small className="footer-caption">Pesquisa Anatel</small>
                            <small className="footer-caption">Relatórios de transparência</small>
                            <small className="footer-caption">Responsabilidade Social</small>
                            <small className="footer-caption">Acessibilidade</small>

                        </div>


                    </div>


                    <div className="flex mt-10">

                        <div className="flex flex-col gap-2">
                            <small className="footer-title mb-1">Ajuda</small>

                            <small className="footer-caption">Central de ajuda</small>
                            <small className="footer-caption">Manuais</small>

                        </div>

                        <div className="flex flex-col gap-2">
                            <small className="footer-title mb-1">SKY Empresas</small>
                        </div>



                    </div>
                </div>
            </div>

            <div className="footer-container flex flex-wrap mt-10">
                <small className="footer-container-caption">Início</small>
                <small className="line-h">|</small>
                <small className="footer-container-caption">Política de Privacidade</small>
                <small className="line-h">|</small>
                <small className="footer-container-caption">Contratos gerais</small>
                <small className="line-h">|</small>
                <small className="footer-container-caption">Contratos Pré-pago</small>
                <small className="line-h">|</small>
                <small className="footer-container-caption">Cancelamento</small>
                <small className="line-h">|</small>
                <small className="footer-container-caption">Ouvidoria</small>
                <small className="line-h">|</small>
                <small className="footer-container-caption">Consumidor.gov</small>


            </div>

            <div className="flex my-2 justify-center items-center xs:px-4 md:px-14 2xl:px-20 ">
                <small className="footer-text">® Todos os direitos reservados 2018. Todas as marcas SKY e qualquer propriedade intelectual inserida nelas são de propriedade da SKY Internacional AG e usadas pela SKY Serviços de Banda Larga LTDA. mediante licença.</small>
            </div>




        </footer>
    )

}