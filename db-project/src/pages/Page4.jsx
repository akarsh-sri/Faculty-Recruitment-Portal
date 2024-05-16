import { useRef, useState } from "react";
import Input from "../components/Input";
import TableInput from "../components/TableInput";
// import { sendPostReq } from "../util";
import classes from "./Page.module.css";
import PageHead from "./PageHead";
import { useEffect } from "react";
export default function Page4() {
  const [publications, setPublications] = useState([]);
  const [patent, setPatent] = useState([]);
  const [book, setBook] = useState([]);
  const [bookChapter, setBookChapter] = useState([]);
  const inputRef = useRef();
  function addPublications() {
    setPublications((pre) => [
      ...pre,
      {
        id: Math.random(),
        sno: pre.length === 0 ? 1 : pre[pre.length - 1].sno + 1,
      },
    ]);
  }
  function removePublications(id) {
    setPublications((pre) => {
      const arr = pre.filter((item) => item.id !== id);
      const ret = arr.map((item, idx) => ({ ...item, sno: idx + 1 }));
      return ret;
    });
  }
  function addPatent() {
    setPatent((pre) => [
      ...pre,
      {
        id: Math.random(),
        sno: pre.length === 0 ? 1 : pre[pre.length - 1].sno + 1,
      },
    ]);
  }
  function removePatent(id) {
    setPatent((pre) => {
      const arr = pre.filter((item) => item.id !== id);
      const ret = arr.map((item, idx) => ({ ...item, sno: idx + 1 }));
      return ret;
    });
  }
  function addBook() {
    setBook((pre) => [
      ...pre,
      {
        id: Math.random(),
        sno: pre.length === 0 ? 1 : pre[pre.length - 1].sno + 1,
      },
    ]);
  }
  function removeBook(id) {
    setBook((pre) => {
      const arr = pre.filter((item) => item.id !== id);
      const ret = arr.map((item, idx) => ({ ...item, sno: idx + 1 }));
      return ret;
    });
  }
  function addBookChapter() {
    setBookChapter((pre) => [
      ...pre,
      {
        id: Math.random(),
        sno: pre.length === 0 ? 1 : pre[pre.length - 1].sno + 1,
      },
    ]);
  }
  function removeBookChapter(id) {
    setBookChapter((pre) => {
      const arr = pre.filter((item) => item.id !== id);
      const ret = arr.map((item, idx) => ({ ...item, sno: idx + 1 }));
      return ret;
    });
  }

  const [sum, setsum] = useState({});
  const [best, setbest] = useState({});
  const [pat, setpat] = useState({});
  const [bk, setbk] = useState({});
  const [bc, setbc] = useState({});
  const [g, setg] = useState({});

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const uid = sessionStorage.getItem('uid');
      const response = await fetch(`http://localhost:3000/sum/?uid=${uid}`);
      if (response.ok) {
        const data = await response.json();
        setsum(data[0]);
        // console.log(data[0].DOB);
      }
      const response2 = await fetch(`http://localhost:3000/best/?uid=${uid}`);
      if (response2.ok) {
        const data = await response2.json();
        setbest(data);
        // console.log(data[0].DOB);
      }
      const response3 = await fetch(`http://localhost:3000/pat/?uid=${uid}`);
      if (response3.ok) {
        const data = await response3.json();
        setpat(data);
        // console.log(data[0].DOB);
      }
      const response4 = await fetch(`http://localhost:3000/book/?uid=${uid}`);
      if (response4.ok) {
        const data = await response4.json();
        setbk(data);
        // console.log(data[0].DOB);
      }
      const response5 = await fetch(`http://localhost:3000/bc/?uid=${uid}`);
      if (response5.ok) {
        const data = await response5.json();
        setbc(data);
        // console.log(data[0].DOB);
      }
      const response6 = await fetch(`http://localhost:3000/g/?uid=${uid}`);
      if (response6.ok) {
        const data = await response6.json();
        setg(data[0]);
        // console.log(data[0].DOB);
      }
    }
  }, []);



  async function sendPostReq(data) {
    const uid = sessionStorage.getItem('uid');
    data = { ...data, uid: uid };
    const res = await fetch("http://localhost:3000/pg4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    const fd = new FormData(evt.target);
    // const acquisition_names=fd.getAll('acquisition');
    const data = Object.fromEntries(fd.entries());
    // data.acquisition=acquisition_names;
    // console.log(data);
    evt.target.reset();
    sendPostReq(data);
    window.location.href = '/page5';
  }
  // function handleChange(ind,evt){
  //   setBookChapter(pre=>{
  //     pre[ind].Authors=evt.target.vaalue
  //   })
  // }
  return (
    <div className={classes.page}>
      <PageHead />
      <div className={classes.mainform}>
        <div className={classes.formHead}>
          <p>
            Welcome : <span className={classes.name}>Astitva</span>
          </p>
          <button className={classes.logout}>Logout</button>
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          <h4>5. Summary of Publications *</h4>
          <section>
            <div className={classes.flex}>
              <Input
                name="Number of International Journal Papers"
                type="text"
                identifier="NoIP"
                size="small"
                value={sum ? sum["Number of International Journal Paper"] : ''}
              />
              <Input
                name="Number of National Journal Papers"
                type="text"
                identifier="NoP"
                size="small"
                value={sum ? sum["Number of National Journal Paper"] : ''}
              />
              <Input
                name="Number of International Conference Papers"
                type="text"
                identifier="NoCP"
                size="small"
                value={sum ? sum["Number of International Conference Paper"] : ''}
              />
              <Input
                name="Number of National Conference Papers"
                type="text"
                identifier="NoNC"
                size="small"
                value={sum ? sum["Number of National Conference Paper"] : ''}
              />
              <Input
                name="Number of Patent(s) [Filed, Published, Granted]"
                type="text"
                identifier="NoPat"
                size="small"
                value={sum ? sum["Number of Patent"] : ''}
              />
              <Input
                name="Number of Book(s)"
                type="text"
                identifier="NoB"
                size="small"
                value={sum ? sum["Number of Book"] : ''}
              />
              <Input
                name="Number of Book Chapter(s)"
                type="text"
                identifier="NoBC"
                size="small"
                value={sum ? sum["Number of Book Chapter"] : ''}
              />
            </div>
          </section>
          <h4>6. List of 10 Best Publications (Journal/Conference)</h4>
          <section>
            <h3>
              List of 10 Best Publications (Journal/Conference)
              <button
                className={classes.addMore}
                type="button"
                onClick={addPublications}
              >
                Add More
              </button>
            </h3>
            <table className={classes.additional}>
              <tr>
                <th>S. No.</th>
                <th>Author(s)</th>
                <th>Title</th>
                <th> Name of Journal/Conference</th>
                <th>Year, Vol., Page</th>
                <th>Impact Factor</th>
                <th>DOI</th>
                <th>Status</th>
                <th></th>
              </tr>
              {publications.map((item, idx) => (
                <tr key={item.id}>
                  <td>
                    <TableInput
                      identifier={`publ${idx}`}
                      value={item.sno}
                      disabled={true}
                      size="small"
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`Author${idx}`}
                      name="Author"
                      value={idx < best.length ? best[idx]["Author"] : ''}
                    // value={item.Authors}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`Title${idx}`}
                      name="Title"
                      value={idx < best.length ? best[idx]["Title"] : ''}
                    // value={item.Title}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`Journal${idx}`}
                      name="Journal"
                      value={idx < best.length ? best[idx]["Name of Journal"] : ''}
                    // value={item["Name of Journal"]}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`Year${idx}`}
                      name="Year"
                      value={idx < best.length ? best[idx]["Year Vol Page"] : ''}
                    // value={item.Year}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`Impact${idx}`}
                      name="Impact"
                      value={idx < best.length ? best[idx]["Imapct Factor"] : ''}
                    // value={item["impact Factor"]}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`doi${idx}`}
                      name="doi"
                      value={idx < best.length ? best[idx]["DOI"] : ''}
                    // value={item.DOI}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`status${idx}`}
                      name="status"
                      value={idx < best.length ? best[idx]["Status"] : ''}
                    // value={item.status}
                    />
                  </td>
                  <td>
                    <span
                      className={classes.remove}
                      onClick={() => removePublications(item.id)}
                    >
                      X
                    </span>
                  </td>
                </tr>
              ))}
            </table>
          </section>
          <h4>7. List of Patent(s), Book(s), Book Chapter(s)</h4>
          <section>
            <h3>
              (A) Patent(s)
              <button
                className={classes.addMore}
                type="button"
                onClick={addPatent}
              >
                Add More
              </button>
            </h3>
            <table className={classes.additional}>
              <tr>
                <th>S. No.</th>
                <th>Inventor(s)</th>
                <th>Title of Patent</th>
                <th> Country of Patent</th>
                <th>Patent Number</th>
                <th>Date of Filing</th>
                <th>Date of Published </th>
                <th>Status</th>
                <th></th>
              </tr>
              {patent.map((item, idx) => (
                <tr key={item.id}>
                  <td>
                    <TableInput
                      identifier={`patent${idx}`}
                      value={item.sno}
                      disabled={true}
                      size="small"
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`inventor${idx}`}
                      name="inventor"
                      value={idx < pat.length ? pat[idx]["Inventor"] : ''}
                    // value={item.inventor}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`ToP${idx}`}
                      name="Title"
                      value={idx < pat.length ? pat[idx]["Title of Patent"] : ''}
                    // value={item["title of patent"]}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`CoP${idx}`}
                      name="country"
                      value={idx < pat.length ? pat[idx]["Country of Patent"] : ''}
                    // value={item["country of patent"]}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`PN${idx}`}
                      name="patent no."
                      value={idx < pat.length ? pat[idx]["Patent Number"] : ''}
                    // value={item["patent number"]}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`DoF${idx}`}
                      name="dof"
                      value={idx < pat.length ? pat[idx]["Date of Filing"] : ''}
                    // value={item.DOF}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`DoP${idx}`}
                      name="dop"
                      value={idx < pat.length ? pat[idx]["Date of Publish"] : ''}
                    // value={item.DOP}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`PS${idx}`}
                      name="status"
                      value={idx < pat.length ? pat[idx]["Status"] : ''}
                    // value={item["status"]}
                    />
                  </td>
                  <td>
                    <span
                      className={classes.remove}
                      onClick={() => removePatent(item.id)}
                    >
                      X
                    </span>
                  </td>
                </tr>
              ))}
            </table>
          </section>
          <section>
            <h3>
              (B) Book(s)
              <button
                className={classes.addMore}
                type="button"
                onClick={addBook}
              >
                Add More
              </button>
            </h3>
            <table className={classes.additional}>
              <tr>
                <th>S. No.</th>
                <th>Author(s)</th>
                <th>Title of Book</th>
                <th> Year of Publication</th>
                <th>ISBN</th>
                <th></th>
              </tr>
              {book.map((item, idx) => (
                <tr key={item.id}>
                  <td>
                    <TableInput
                      identifier={`book${idx}`}
                      value={item.sno}
                      disabled={true}
                      size="small"
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`Aut${idx}`}
                      name="author"
                      value={idx < bk.length ? bk[idx]["Author"] : ''}
                    // value={item.author}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`TB${idx}`}
                      name="Title"
                      value={idx < bk.length ? bk[idx]["Title of Boook"] : ''}
                    // value={item["title of book"]}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`YoP${idx}`}
                      name="year"
                      value={idx < bk.length ? bk[idx]["Year of Publication"] : ''}
                    // value={item["year of publication"]}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`ISBN${idx}`}
                      name="ISBN"
                      value={idx < bk.length ? bk[idx]["ISBN"] : ''}
                    // value={item.ISBN}
                    />
                  </td>
                  <td>
                    <span
                      className={classes.remove}
                      onClick={() => removeBook(item.id)}
                    >
                      X
                    </span>
                  </td>
                </tr>
              ))}
            </table>
          </section>
          <section>
            <h3>
              (C) Book Chapter(s)
              <button
                className={classes.addMore}
                type="button"
                onClick={addBookChapter}
              >
                Add More
              </button>
            </h3>
            <table className={classes.additional}>
              <tr>
                <th>S. No.</th>
                <th>Author(s)</th>
                <th>Title of Book Chapter(s)</th>
                <th> Year of Publication</th>
                <th>ISBN</th>
                <th></th>
              </tr>
              {bookChapter.map((item, idx) => (
                <tr key={item}>
                  <td>
                    <TableInput
                      identifier={`BC${idx}`}
                      value={item.sno}
                      disabled={true}
                      size="small"
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`BCAuth${idx}`}
                      name="author"
                      value={idx < bc.length ? bc[idx]["Author"] : ''}
                    // value={item.author}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`ToBCh${idx}`}
                      name="Title"
                      value={idx < bc.length ? bc[idx]["Title of Book Chapter"] : ''}
                    // value={item["title of book"]}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`YoPC${idx}`}
                      name="year"
                      value={idx < bc.length ? bc[idx]["Year of Publication"] : ''}
                    // value={item["year of publication"]}
                    />
                  </td>
                  <td>
                    <TableInput
                      identifier={`ISBNC${idx}`}
                      name="ISBN"
                      value={idx < bc.length ? bc[idx]["ISBN"] : ''}
                    // value={item.ISBN}
                    />
                  </td>
                  <td>
                    <span
                      className={classes.remove}
                      onClick={() => removeBookChapter(item.id)}
                    >
                      X
                    </span>
                  </td>
                </tr>
              ))}
            </table>
          </section>
          <h4>8. Google Scholar Link *</h4>
          <section>
            <h3>URL</h3>
            <div className={classes.flex}>
              <Input name="Google Scholar Link" identifier="gScholarLink" value={g ? g["Google Scholar Link"] : ""} />
            </div>
          </section>
          <section className={classes.rightAlign}>
            <button className={classes.submit} onClick={() => handleSubmit}>Save and Next</button>
          </section>
        </form>
      </div>
    </div>
  );
}
