import style from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className="container">
                <p>Copyright © 2023 Movie App. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;