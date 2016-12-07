import React from 'react';
import { render } from 'enzyme';
import BlogSlice from '.';
import styles from './blog-entry/style.css';

const cheerioSelector = className => (
	'.'+className.replace(/\s/g,'.')
);

describe('site/blog-slice', () => {
	it('should render OK with bio between tags', () => {
		const posts = [{
			title: 'A post',
			author: { 
				displayName: 'Milo',
				bio:'<p>Software Engineer</p>'
			},
			categories: ['Technology'],
		}]; 
		const blogSlice =  render(<BlogSlice featuredBlogPosts={posts} />);
		const className = cheerioSelector(styles.linkAuthorTitle);
		expect(blogSlice.find(className).text()).to.equal('Software Engineer');
	});

	it('should render OK with empty bio', () => {
		const posts = [{
			title: 'A post',
			author: { 
				displayName: 'Milo',
				bio:''
			},
			categories: ['Technology'],
		}]; 
		const blogSlice =  render(<BlogSlice featuredBlogPosts={posts} />);
		const className = cheerioSelector(styles.linkAuthorTitle);
		expect(blogSlice.find(className).text()).to.equal('');
	});

	it('should render OK with plain text bio', () => {
		const posts = [{
			title: 'A post',
			author: { 
				displayName: 'Milo',
				bio:'Software Engineer'
			},
			categories: ['Technology'],
		}]; 
		const blogSlice =  render(<BlogSlice featuredBlogPosts={posts} />);
		const className = cheerioSelector(styles.linkAuthorTitle);
		expect(blogSlice.find(className).text()).to.equal('Software Engineer');
	});

	it('should prepend domain name to url id', () => {
		const posts = [{
			title: 'A post',
			urlId: '2016/this-is-a-blog-post',
			author: { 
				displayName: 'Milo',
				bio:'Software Engineer'
			},
			categories: ['Technology'],
		}]; 
		const blogSlice =  render(<BlogSlice featuredBlogPosts={posts} />);
		const className = cheerioSelector(styles.link);
		expect(blogSlice.find(className).attr('href')).to.equal('http://red-badger.com/blog/2016/this-is-a-blog-post');
	});
});
