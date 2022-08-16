import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/44501583?v=4',
      name: 'Paulo H. de Assumpcao',
      role: 'Desenvolvedor Web'
    },
    publishedAt: new Date('2022-03-01 8:00:25'),
    content: 'Parabens pelo excelente post!'
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80',
      name: 'Sabrina Souza de Borba',
      role: 'Analista Financeiro'
    },
    publishedAt: new Date('2022-03-05 12:25:13'),
    content: 'Ótimo post, parabens!'
  }
]

function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          })}
        </main>
      </div>

    </div>
  )
}

export default App