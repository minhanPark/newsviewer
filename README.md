# newsviewer

리액트를 다루는 기술에 나오는 뉴스뷰어 입니다.

## useEffect에 등록하는 함수는 async가 되면 안됨

왜냐하면 useEffect에 등록된 함수가 리턴하는 것은 정리함수여야 하기 때문.

```js
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const query = category === "all" ? "" : `&category=${category}`;
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c2b0496873fe4f9c8a54ec24009b07e5`
      );
      setArticles(response.data.articles);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  fetchData();
}, [category]);
```

그래서 예시처럼 useEffect 안에서 async 함수를 따로 정의하고 실행한다.

## 이용할만한 재밌는 api

[뉴스 api](https://newsapi.org/)  
해당 사이트에서는 뉴스의 api를 제공해준다. 손쉽게 뉴스를 갖고 올 수 있음

[가짜 api 제공](https://jsonplaceholder.typicode.com/)  
가짜 api들을 제공해준다. 포스트, 코멘트, 포토등 여러가지 제공해줘서 미리 데이터를 넣어볼 때 좋음
