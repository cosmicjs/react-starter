import React from 'react'
import Router from 'next/router'
import bucket from '../config'
import Header from '../components/header'
import Footer from '../components/footer'
import Nav from '../components/nav'
class DefaultPage extends React.Component {
  static async getInitialProps({ req, query }) {
    let slug = query.slug
    if (!slug)
      slug = 'home'
    const res = await bucket.getObject({ slug })
    const page = res.object
    return { page }
  }
	render() {
    return (
      <div>
        <Header page={ this.props.page }/>
        <div className="main">
          <h1>{ this.props.page.title }</h1>
          <div dangerouslySetInnerHTML={{ __html: this.props.page.content }}></div>
          <Nav />
        </div>
        <Footer />
      </div>
		);
	}
}

export default DefaultPage