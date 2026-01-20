import "server-only";

function Social(){
    return (
        <div className="row justify-content-center pt-4 text-center padding-top-3x padding-bottom-3x">
            
            <div className="col-xl-5 col-lg-6 col-md-8  text-center justify-content-center">
                <h2 className="mb-3">
                    <i className="d-block fas fa-smile text-primary mb-3 w-100"></i>
                    Lets get social.
                </h2>
                <p id="socialText" className="lead">If you miss it in your inbox, you can still catch our greatest events on social media.</p>
                <a href="#" id="facebook" className="social-button shape-circle sb-facebook" target="_blank" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" id="twitter" className="social-button shape-circle sb-twitter" target="_blank" data-toggle="tooltip" data-placement="top" title="" data-original-title="X"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" id="instagram" className="social-button shape-circle sb-instagram" target="_blank" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    );
}

export default Social;