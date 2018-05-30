import React from 'react'
import Router from 'next/router'
import bucket from '../config'
import Page from '../components/page'
import PageNotFound from '../components/404'
import Header from '../components/header'
import Footer from '../components/footer'
import Nav from '../components/nav'
class DefaultPage extends React.Component {
  static async getInitialProps({ req, query }) {
    let slug = query.slug
    if (!slug)
      slug = 'home'
    let page
    try {
      const res = await bucket.getObject({ slug })
      page = res.object
    } catch(e) {
      page = {
        title: 'Page not found',
        component: '404'
      }
    }
    return { page }
  }
	render() {
    return (
      <div>
        <Header page={ this.props.page }/>
        <div className="main">
          {this.props.page.component && this.props.page.component==='404' ? (
            <PageNotFound />
          ) : (
            <Page page={this.props.page} />
          )}
          <Nav />
        </div>
        <Footer />
      </div>
		);
	}
}

export default DefaultPage