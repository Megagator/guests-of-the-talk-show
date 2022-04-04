'use strict'
;(self.webpackChunkguests_of_the_talk_show =
  self.webpackChunkguests_of_the_talk_show || []).push([
  [104],
  {
    2130: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return w
          },
        })
      var r = n(7294),
        a = n(3049),
        l = n(468),
        u = n(9784),
        o = n(1597),
        c = n(1971),
        i = n(2406),
        s = n(7313),
        m = n(2915),
        f = n(4314)
      function d(e, t) {
        var n =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator']
        if (n) return (n = n.call(e)).next.bind(n)
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (!e) return
            if ('string' == typeof e) return b(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === n && e.constructor && (n = e.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(e)
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return b(e, t)
          })(e)) ||
          (t && e && 'number' == typeof e.length)
        ) {
          n && (e = n)
          var r = 0
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
          }
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }
      function b(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      var E = 'Episode',
        y = 'Date',
        g = 'Duration',
        v = 'ascending',
        p = 'descending',
        h = function (e, t, n) {
          var r = t
          return (
            e === n && (r = t === v ? p : v),
            'Sort the table by the ' + n + ', ' + r
          )
        },
        S = function (e) {
          var t = r.useState(E),
            n = t[0],
            a = t[1],
            l = r.useState(p),
            b = l[0],
            S = l[1],
            _ = function (e) {
              n === e ? S(b === p ? v : p) : a(e)
            },
            A = f.filter(function (t) {
              for (var n, r = d(t.guests); !(n = r()).done; ) {
                if (n.value === e.guest) return !0
              }
              return !1
            })
          return (
            A.sort(function (e, t) {
              var r = 0
              switch (n) {
                default:
                case E:
                  r = e.number - t.number
                  break
                case y:
                  r = u.ou.fromISO(e.pubDate) - u.ou.fromISO(t.pubDate)
                  break
                case g:
                  r = e.durationSeconds - t.durationSeconds
              }
              return b === p && (r *= -1), r
            }),
            r.createElement(
              'table',
              { className: m.ip },
              r.createElement(
                'thead',
                null,
                r.createElement(
                  'tr',
                  null,
                  r.createElement(
                    'td',
                    null,
                    r.createElement(
                      'button',
                      {
                        onClick: function () {
                          return _(E)
                        },
                        className:
                          s.title +
                          ' ' +
                          (n === E ? m.bB : '') +
                          ' ' +
                          (b === v ? m.B : m.TZ),
                        title: h(n, b, E),
                      },
                      E
                    )
                  ),
                  r.createElement(
                    'td',
                    null,
                    r.createElement(
                      'button',
                      {
                        onClick: function () {
                          return _(y)
                        },
                        className:
                          s.title +
                          ' ' +
                          (n === y ? m.bB : '') +
                          ' ' +
                          (b === v ? m.B : m.TZ),
                        title: h(n, b, y),
                      },
                      y
                    )
                  ),
                  r.createElement(
                    'td',
                    null,
                    r.createElement(
                      'button',
                      {
                        onClick: function () {
                          return _(g)
                        },
                        className:
                          s.title +
                          ' ' +
                          (n === g ? m.bB : '') +
                          ' ' +
                          (b === v ? m.B : m.TZ),
                        title: h(n, b, g),
                      },
                      g
                    )
                  )
                )
              ),
              r.createElement(
                'tbody',
                null,
                A.map(function (e, t) {
                  return r.createElement(
                    'tr',
                    { key: 'episode_' + e.number },
                    r.createElement(
                      'td',
                      null,
                      r.createElement(
                        o.rU,
                        { to: '/episode/' + e.slug },
                        e.number + ': ' + e.title
                      )
                    ),
                    r.createElement('td', null, (0, i.Z)(e.pubDate)),
                    r.createElement('td', null, (0, c.Z)(e.durationSeconds))
                  )
                })
              )
            )
          )
        }
      function _(e, t) {
        var n =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator']
        if (n) return (n = n.call(e)).next.bind(n)
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (!e) return
            if ('string' == typeof e) return A(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === n && e.constructor && (n = e.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(e)
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return A(e, t)
          })(e)) ||
          (t && e && 'number' == typeof e.length)
        ) {
          n && (e = n)
          var r = 0
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
          }
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }
      function A(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      var k = function (e) {
          var t = r.useState([]),
            n = t[0],
            a = t[1],
            l = r.useState(0),
            o = l[0],
            c = l[1],
            i = r.useState(null),
            s = i[0],
            m = i[1],
            d = r.useState(null),
            b = d[0],
            E = d[1]
          return (
            r.useEffect(
              function () {
                var t = f.filter(function (t) {
                  for (var n, r = _(t.guests); !(n = r()).done; ) {
                    if (n.value === e.guest) return !0
                  }
                  return !1
                })
                t.reverse(), a(t)
                for (var n, r = [], l = null, o = _(t); !(n = o()).done; ) {
                  var i = n.value
                  if (null !== l) {
                    var s = u.ou.fromISO(i.pubDate).diff(l, 'days').toObject()
                    r.push(Math.abs(s.days))
                  }
                  l = u.ou.fromISO(i.pubDate)
                }
                var d = r.reduce(function (e, t) {
                    return e + t
                  }, 0),
                  b = Math.round(d / t.length)
                if ((c(b), b > 0)) {
                  var y = l.plus({ days: b })
                  m(y)
                  var g = y.diffNow('days').toObject().days
                  E(Math.round(g))
                }
              },
              [e.guest]
            ),
            r.createElement(
              'div',
              { className: 'guest_stats-module--stat_table--R3nt3' },
              r.createElement(
                'table',
                null,
                r.createElement(
                  'tbody',
                  null,
                  r.createElement(
                    'tr',
                    null,
                    r.createElement('td', null, 'Appearances'),
                    r.createElement('td', null, n.length)
                  ),
                  r.createElement(
                    'tr',
                    null,
                    r.createElement('td', null, 'Cadence'),
                    0 === o
                      ? r.createElement('td', null, 'None')
                      : r.createElement('td', null, o, ' days')
                  ),
                  r.createElement(
                    'tr',
                    null,
                    r.createElement('td', null, 'Next'),
                    null === s
                      ? r.createElement('td', null, 'None')
                      : r.createElement(
                          'td',
                          null,
                          s.toLocaleString(u.ou.DATE_MED),
                          r.createElement('br', null),
                          b > 0
                            ? r.createElement('em', null, '(in ', b, ' days)')
                            : r.createElement(
                                'em',
                                null,
                                '(',
                                Math.abs(b).toLocaleString(),
                                ' days ago)'
                              )
                        )
                  )
                )
              )
            )
          )
        },
        w = function (e) {
          var t = e.pageContext.guest
          return r.createElement(
            'main',
            { className: s.container },
            r.createElement('title', null, t, ' | Guest of The Talk Show'),
            r.createElement(
              'div',
              { className: s.container },
              r.createElement(a.Z, { isSingular: !0 }),
              r.createElement(
                'h1',
                {
                  className:
                    s.title +
                    ' ' +
                    s.text_center +
                    ' ' +
                    s.m_bot_lg +
                    ' ' +
                    s.m_top_lg,
                },
                t
              ),
              r.createElement(
                'div',
                { className: s.sixty_fourty },
                r.createElement(S, { guest: t }),
                r.createElement(k, { guest: t })
              ),
              r.createElement(l.Z, { guest: t })
            )
          )
        }
    },
  },
])
//# sourceMappingURL=component---src-templates-guest-template-js-560b96180c128cb3a72d.js.map
