import { Image } from "./image";

export const Diet = (props) => {
  return (
    <div id='Diet' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Dietry foods</h2>
          <p>
            Below here are examples of food that you can eat if you are planning to continue a diet.
          </p>
        </div>
        <div className='row'>
          <div className='Diet-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}