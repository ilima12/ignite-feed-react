import { Header } from './components/Header';
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ilima12.png',
      name: 'Italo Lima',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys 👋' },
      { type: 'paragraph', content: 'I have just uploaded a browser application to test its functionality. Go to the website link. 🚀' },
      { type: 'link', content: '2all.design/sunweb' },
    ],
    publishedAt: new Date('2024-09-30 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/leandro-carlos.png',
      name: 'Leandro Castro',
      role: 'Mobile Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys 👋' },
      { type: 'paragraph', content: 'I have just uploaded a mobile app to test its functionality. Go to the project link. 🚀' },
      { type: 'link', content: '2all.design/sunapp' },
    ],
    publishedAt: new Date('2024-09-30 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
