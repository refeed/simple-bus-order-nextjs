import Head from "next/head";
import Image from "next/image";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {useRef} from "react"

// import styles from "../styles/Home.module.css";
import AKAPNavbar from "../components/AKAPNavbar";



export default function Pesan() {
  const formRef = useRef()

  function handleSubmit(event) {
    console.log(formRef)
    event.preventDefault()
  }

  return (
    <>
      <Head>
        <title>PT. AKAP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AKAPNavbar />

      <div className="container">
        <main>
          <h1 className="mt-4">Formulir Pemesanan</h1>

          <Form method="POST" action="/api/submitPesan" ref={formRef}>
          <Form.Group className="mb-3" controlId="namaLengkap">
              <Form.Label>Nama lengkap</Form.Label>
              <Form.Control name="namaLengkap"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="nomorIdentitas">
              <Form.Label>Nomor identitas</Form.Label>
              <Form.Control name="nomorIdentitas"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="nomorHP">
              <Form.Label>Nomor HP</Form.Label>
              <Form.Control name="nomorHP"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="kelasPenumpang">
              <Form.Label>Kelas penumpang (DROPDOWN)</Form.Label>
              <Form.Control name="kelasPenumpang"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="tanggalKeberangkatan">
              <Form.Label>Tanggal keberangkatan</Form.Label>
              <Form.Control placeholder="DD/MM/YYYY" name="tanggalKeberangkatan"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="jumlahPenumpang">
              <Form.Label>Jumlah penumpang</Form.Label>
              <Form.Control name="jumlahPenumpang"/>
              <Form.Text className="text-muted">
                {"Bukan lansia (Usia < 60)"}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="jumlahLansia">
              <Form.Label>Jumlah lansia</Form.Label>
              <Form.Control name="jumlahLansia"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="setuju">
              <Form.Check type="checkbox" label="Saya dan/atau rombongan telah membaca, memahami, dan setuju berdasarkan syarat dan ketentuan yang  telah ditetapkan" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Pesan
            </Button>
          </Form>
        </main>
      </div>
    </>
  );
}
