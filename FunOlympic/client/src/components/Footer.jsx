import { BackTop } from 'antd';


function Footer() {
    return (
        <div className="footerCopyright">
            <div className="container">
                <div className="copyright" > <p style={{ color: 'white' }}>©2022 Created by ABC Inc.</p></div>

            </div>
            <BackTop />
        </div>
    );
}

export default Footer;