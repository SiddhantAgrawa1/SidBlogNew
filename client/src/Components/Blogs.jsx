import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
    
    return(
        <div className="container mt-4 mb-5">
            <div className="container my-4">
                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">
                        Does god exist?
                        <span className="text-muted"> May be or may not be🤔. Who gives you guarantee and how.  </span>
                        </h2>
                        <p className="lead">
                         Is there any proof🔍 which usually asked by atheists. What I think🧠 on it ? Here I am not giving you answer thus god is real or... {'  '}
                        <Link to="/blog/Does god exist">Continue reading </Link>
                        </p>
                    </div>
                    <div className="col-md-3">
                        <img src={require("../static/ab1.jpeg")} alt="" className="img-fluid" width="500" height="500" />
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <div className="row featurette d-flex justify-content-center align-items-center">
                <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">
                The Fake Illusion of Dharma
                <span className="text-muted"> I think many of us heard the word "Dharma"</span>
                </h2>
                <p className="lead">
                 In many holy books such as Mahabharata and Ramayana. But what is the
                meaning of it. You heard different meaning in different verses of
                different books...{'  '}
                <Link to='/blog/The fake illusion of dharma'>Continue reading</Link>
                </p>
            </div>
            <div className="col-md-3">
                <img src={require("../static/Ab21.jpeg")} alt="" className="img-fluid" width="500" height="500" />
            </div>
            </div>
        </div>
    
        <div className="container my-4">
        <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-7">
        <h2 className="featurette-heading">
          LIFE IS NEVER EASY
          <span className="text-muted"> We never accept this truth and blaming on little things</span>
        </h2>
        <p className="lead">
           that why this happened with me? or Why I don't get what I want?. I
          think that we are not grateful towards our life. We don't understand
          how great is our life. Many people from us goes into depression due
          to some common problems like some...{'  '}
          <Link to="/blog/Life is never easy">Continue reading</Link>
        </p>
    </div>
      <div className="col-md-3">
        <img src={require("../static/Ab22.jpeg")} alt="" className="img-fluid" width="500" height="500" />
      </div>
    </div>
  </div>
        </div>
    )
}

export default Blogs;