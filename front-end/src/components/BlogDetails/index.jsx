import { useEffect, useState } from "react";
import PostService from "../../service/PostService";
import TopicService from "../../service/TopicService";
import { urlImage } from "../../config";
import { Form, Link } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(Date.now());
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const result = await PostService.getID(id);
      // result la variable ,posts is name table
      setPosts(result.data.post);
  
    })();
  }, [id,load]);
  return (
    <>
      <section
        className="breadcrumbs-section background_bg"
        data-img-src="image/blog-breadcrumbs-img.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="page_title text-center">
                <h1>Blog Detail</h1>
                <ul className="breadcrumb justify-content-center">
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <a href="index.html">Blog</a>
                  </li>
                  <li>
                    <span>Blog Detail</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
 
                  <section className="blog_detail-inner-section pt_large pb_large">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="blog-info">
                          <div className="news-details">
                            <h4>
                              <a href="#">{posts.title}</a>
                            </h4>
                            <p className="comments">
                              Posted by{" "}
                              <a href="#">
                                <i>admin</i>
                              </a>
                              03 January 2018
                              <a href="#">
                                <i className="fa fa-comments"></i> 5 Comments
                              </a>
                            </p>
                          </div>
                          <div className="blog-detail-img">
                            <img
                              src={urlImage+"post/"+posts.image}
                              align="blog_img5"
                            />
                          </div>
                          <div className="blo-detail-text">
                            <p>
                              {posts.description}
                            </p>
                          </div>
                          <div className="blog-tags">
                            <span>tag:</span>
                            <ul>
                              <li>
                                <p>Athletic Shop</p>
                              </li>
                              <li>
                                <p>Fashion</p>
                              </li>
                            </ul>
                          </div>
                          <div className="next_prev-btn">
                            <a href="#" className="btn btn-secondary prev_post">
                              <i className="fa fa-chevron-left"></i>prev post
                            </a>
                            <a href="#" className="btn btn-secondary next_post">
                              next-post<i className="fa fa-chevron-right"></i>
                            </a>
                          </div>
                        </div>
                        <div className="latest-posts">
                          <div className="title">
                            <h4>RELATED PRODUCTS</h4>
                          </div>
                          <div className="row">
                            <div className="col-md-4 col-sm-6">
                              <div className="latest-posts-box news-box box-1">
                                <div className="news-img">
                                  <img
                                    src="../../../user/image/news-img-1.jpg"
                                    alt="news-img"
                                  />
                                  <div className="date-box text-center text-uppercase">
                                    <h5>
                                      03 <br />
                                      Jan
                                    </h5>
                                  </div>
                                </div>
                                <div className="news-info text-center">
                                  <h5>
                                    <a href="blog-detail.html">Simply tips for beauty</a>
                                  </h5>
                                  <p className="comments">
                                    Posted by{" "}
                                    <a href="#">
                                      <i>admin</i> - 2 Comments
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                              <div className="latest-posts-box news-box box-2">
                                <div className="news-img">
                                  <img
                                    src="../../../user/image/news-img-2.jpg"
                                    alt="news-img"
                                  />
                                  <div className="date-box text-center text-uppercase">
                                    <h5>
                                      03 <br />
                                      Jan
                                    </h5>
                                  </div>
                                </div>
                                <div className="news-info text-center">
                                  <h5>
                                    <a href="blog-detail.html">Simply tips for beauty</a>
                                  </h5>
                                  <p className="comments">
                                    Posted by{" "}
                                    <a href="#">
                                      <i>admin </i> - 5 Comments
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                              <div className="latest-posts-box news-box box-2">
                                <div className="news-img">
                                  <img
                                    src={urlImage+"/post"+posts.image}
                                    alt="news-img"
                                  />
                                
                                </div>
                                <div className="news-info text-center">
                                  <h5>
                                    <a href="blog-detail.html">Simply tips for beauty</a>
                                  </h5>
                               
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="leave-reply">
                          <div className="tab-title">
                            <h6>Leave a reply</h6>
                          </div>
                          <div className="social_icon mb-3">
                            <span>Connect with:</span>
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-linkedin"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-pinterest-p"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-google-plus"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <form className="leave-reply-form">
                            <div className="input-1">
                              <input
                                required=""
                                className="form-control"
                                placeholder="Enter Your Name"
                                defaultValue=""
                                type="text"
                              />
                            </div>
                            <div className="input-2">
                              <input
                                required=""
                                className="form-control"
                                placeholder="Enter Your Email"
                                defaultValue=""
                                type="email"
                              />
                            </div>
                            <div className="input-3">
                              <input
                                required=""
                                className="form-control"
                                placeholder="Your Website"
                                defaultValue=""
                                type="text"
                              />
                            </div>
                            <div className="input-4">
                              <textarea
                                required=""
                                rows="4"
                                className="form-control"
                                placeholder="Your Comment"
                              ></textarea>
                            </div>
                            <div className="input-btn">
                              <button type="submit" className="btn btn-secondary">
                                Post Comment
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
            

    </>
  );
}

export default BlogDetails;
