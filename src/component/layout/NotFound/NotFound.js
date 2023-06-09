import style from './NotFound.module.css';
import StyledBackButton from '../BackButton/StyledBackButton';
import imgPageNotFound from '../../../images/404-error.jpg';

function PageNotFound() {
  return (
    <>
      <h1 className={style['not-found-header']}>Page not found</h1>
      <div className={style['not-found-page-container']}>
        <div className={style['not-found-wrapper']}>
          <div className="card">
            <div className="card-body">
              {/* Header with error message "The requested page does not exist." and an image of a 404 Error to indicate 
                  that the requested page could not be found. */}
              <h2>The requested page does not exist.</h2>
              <img
                className={style['img-page-not-found']}
                src={imgPageNotFound}
                alt="Page not found"
              />
            </div>
            {/* Renders a custom StyledBackButton component with a link to the home page, 
             styled by default with a className "link-color" color, and text "Go to home page" 
             which passed to the component as a child */}
            <StyledBackButton linkName={'/'} className={'link-color'} children>
              <span>Go to home page</span>
            </StyledBackButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
