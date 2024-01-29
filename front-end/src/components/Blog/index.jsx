import { useEffect, useState } from "react";
import PostService from "../../service/PostService";
import TopicService from "../../service/TopicService";
import { urlImage } from "../../config";
import { Form, Link } from "react-router-dom";
import React from "react";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [topics, setTopics] = useState([]);
  const [load, setLoad] = useState(Date.now());
  useEffect(() => {
    (async () => {
      const result = await PostService.getList();
      // result la variable ,posts is name table
      setPosts(result.data.post);
      const resultTopic = await TopicService.getList();
      setTopics(resultTopic.data.topic);
    })();
  }, [load]);
  return (
    <>
      <section
        className="breadcrumbs-section background_bg"
        data-img-src="image/blog-breadcrumbs-img.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page_title text-center">
                <h1>Blog 3 Colums</h1>
                <ul className="breadcrumb justify-content-center">
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <span>Blog 3 Colums</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-inner-section pt_large pb_large">
        <div className="container">
          <div className="row justify-content-center blog_info">
            {posts &&
              posts.map((post, index) => {
                return (
                  <div className="col-lg-4 col-sm-6">
                    <div className="news-box box-1">
                      <div className="news-img">
                        <div className="fit-videos">
                          <img
                            src={urlImage + "post/" + post.image}
                            alt="product-img"
                          />
                        </div>
                      </div>
                      <div className="news-info text-center">
                        <h5>
                          <a href="blog-detail.html">{post.title}</a>
                        </h5>

                        <p className="news-text">{post.description}</p>
                        <Link
                          to={"/BlogDetail/" + post.id}
                          className="quickview-popup-link"
                        >
                          Read
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="row">
            <div className="col-md-12">
              <nav>
                <ul className="pagination justify-content-center">
                  <li className="active">
                    <a href="#">
                      1 <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#" aria-label="Next">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
