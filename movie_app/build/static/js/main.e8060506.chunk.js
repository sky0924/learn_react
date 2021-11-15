(this.webpackJsonpmovie_app_20211021 =
  this.webpackJsonpmovie_app_20211021 || []).push([
  [0],
  {
    36: function (e, t, n) {},
    65: function (e, t, n) {},
    66: function (e, t, n) {},
    67: function (e, t, n) {},
    68: function (e, t, n) {},
    69: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        s = n.n(a),
        c = n(27),
        i = n.n(c),
        r = n(6),
        o = n(2),
        j = (n(36), n(1));
      var l = function () {
          return Object(j.jsxs)("div", {
            className: "nav",
            children: [
              Object(j.jsx)(r.b, { to: "/", children: "Home" }),
              Object(j.jsx)(r.b, { to: "/about", children: "About" }),
            ],
          });
        },
        u = n(18),
        m = n.n(u),
        d = n(30),
        b = n(10),
        h = n(11),
        v = n(13),
        p = n(12),
        O = n(31),
        x = n.n(O);
      n(65);
      var f = function (e) {
          e.id;
          var t = e.year,
            n = e.title,
            a = e.summary,
            s = e.poster,
            c = e.genres;
          return Object(j.jsx)(r.b, {
            to: {
              pathname: "/movie_detail",
              state: { year: t, title: n, summary: a, poster: s, genres: c },
            },
            children: Object(j.jsxs)("div", {
              className: "movie",
              children: [
                Object(j.jsx)("img", { src: s, alt: n, title: n }),
                Object(j.jsxs)("div", {
                  className: "movie__data",
                  children: [
                    Object(j.jsx)("h3", {
                      className: "movie__title",
                      children: n,
                    }),
                    Object(j.jsx)("h5", {
                      className: "movie__year",
                      children: t,
                    }),
                    Object(j.jsx)("ul", {
                      className: "movie__genres",
                      children: c.map(function (e, t) {
                        return Object(j.jsx)(
                          "li",
                          { className: "genres__genre", children: e },
                          t
                        );
                      }),
                    }),
                    Object(j.jsxs)("p", {
                      className: "movie__summary",
                      children: [a.slice(0, 140), "..."],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        _ =
          (n(66),
          (function (e) {
            Object(v.a)(n, e);
            var t = Object(p.a)(n);
            function n() {
              var e;
              Object(b.a)(this, n);
              for (
                var a = arguments.length, s = new Array(a), c = 0;
                c < a;
                c++
              )
                s[c] = arguments[c];
              return (
                ((e = t.call.apply(t, [this].concat(s))).state = {
                  isLoading: !0,
                  movies: [],
                }),
                (e.getMovies = Object(d.a)(
                  m.a.mark(function t() {
                    var n, a;
                    return m.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              x.a.get(
                                "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
                              )
                            );
                          case 2:
                            (n = t.sent),
                              (a = n.data.data.movies),
                              e.setState({ movies: a, isLoading: !1 });
                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )),
                e
              );
            }
            return (
              Object(h.a)(n, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.getMovies();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.state,
                      t = e.isLoading,
                      n = e.movies;
                    return Object(j.jsx)("section", {
                      className: "container",
                      children: t
                        ? Object(j.jsx)("div", {
                            className: "loader",
                            children: Object(j.jsx)("span", {
                              className: "loader__text",
                              children: "Loading...",
                            }),
                          })
                        : Object(j.jsx)("div", {
                            className: "movies",
                            children: n.map(function (e) {
                              return Object(j.jsx)(
                                f,
                                {
                                  id: e.id,
                                  year: e.year,
                                  title: e.title,
                                  summary: e.summary,
                                  poster: e.medium_cover_image,
                                  genres: e.genres,
                                },
                                e.id
                              );
                            }),
                          }),
                    });
                  },
                },
              ]),
              n
            );
          })(s.a.Component)),
        y = _;
      n(67);
      var g = function (e) {
          return Object(j.jsx)("span", { children: "About this page: blah.." });
        },
        N = (function (e) {
          Object(v.a)(n, e);
          var t = Object(p.a)(n);
          function n() {
            return Object(b.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(h.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.history;
                  void 0 === t.state && n.push("/");
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.location;
                  return e.state
                    ? Object(j.jsx)("h1", { children: e.state.title })
                    : null;
                },
              },
            ]),
            n
          );
        })(s.a.Component),
        k = N;
      n(68);
      var w = function () {
        return Object(j.jsxs)(r.a, {
          children: [
            Object(j.jsx)(l, {}),
            Object(j.jsx)(o.a, { path: "/", exact: !0, component: y }),
            Object(j.jsx)(o.a, { path: "/about", component: g }),
            Object(j.jsx)(o.a, { path: "/movie_detail", component: k }),
          ],
        });
      };
      i.a.render(
        Object(j.jsx)(s.a.StrictMode, { children: Object(j.jsx)(w, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[69, 1, 2]],
]);
//# sourceMappingURL=main.e8060506.chunk.js.map
