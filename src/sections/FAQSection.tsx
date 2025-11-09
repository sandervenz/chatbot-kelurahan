'use client';

import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import { FAQCard } from "@/components/FAQCard";

const faqData = [
  {
    question: "Di mana letak Kelurahan Kebon Baru?",
    answer: "Kelurahan Kebon Baru berada di Kecamatan Tebet, Jakarta Selatan. Wilayah ini dikenal dengan suasananya yang hidup, akses transportasi yang mudah, serta perpaduan antara nuansa kota dan kenyamanan lingkungan lokal."
  },
  {
    question: "Apakah ada ruang terbuka untuk olahraga atau bersantai?",
    answer: "Ada beberapa taman dan area publik yang bisa digunakan warga untuk olahraga pagi, piknik keluarga, atau sekadar bersantai di sore hari."
  },
  {
    question: "Apa kuliner khas yang bisa dicoba di Kebon Baru?",
    answer: "Kamu bisa mencicipi berbagai pilihan kuliner — mulai dari Kedai Ngemat yang terkenal dengan masakan rumahan, hingga Bowl Coffee atau Clay Café yang cocok untuk nongkrong santai."
  },
  {
    question: "Bagaimana cara menuju Kebon Baru dengan transportasi umum?",
    answer: "Kamu bisa turun di Stasiun Tebet, lalu melanjutkan perjalanan dengan ojek online atau angkutan umum. Selain itu, terdapat banyak halte bus di sekitar Jalan Asem Baris dan KH. Abdullah Syafei."
  },
  {
    question: "Bagaimana cara mengurus surat di Kelurahan Kebon Baru?",
    answer: "Warga dapat datang langsung ke kantor kelurahan dengan membawa dokumen yang diperlukan sesuai jenis layanan. Informasi lengkap juga tersedia di halaman \"Layanan Masyarakat\""
  },
  {
    question: "Apakah Kebon Baru mudah dijangkau dari pusat Jakarta?",
    answer: "Sangat mudah. Dengan KRL, TransJakarta, atau kendaraan pribadi, kamu bisa sampai ke Kebon Baru dalam waktu sekitar 20–30 menit dari pusat kota."
  },
  {
    question: "Apakah di Kebon Baru banyak UMKM lokal?",
    answer: "Ya! Banyak pelaku UMKM yang bergerak di bidang makanan, minuman, dan kerajinan. Kelurahan juga mendukung pengembangan UMKM melalui kegiatan promosi dan pelatihan rutin."
  },
  {
    question: "Apa yang membuat Kebon Baru unik dibanding kelurahan lain?",
    answer: "Kebon Baru dikenal sebagai kawasan yang dinamis — memiliki banyak ruang terbuka hijau, kuliner otentik yang beragam, serta akses transportasi yang strategis dari dan menuju berbagai penjuru Jakarta."
  }
];

export const FAQSection = () => {
  return (
    <Box
      as="section"
      py={8}
      bg="#FFFDF0"
    >
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Box
            bg="#F4E5A1"
            py={6}
            px={8}
            borderRadius="md"
            textAlign="center"
          >
            <Heading>
              Kami Siap Membantu Anda
            </Heading>
          </Box>

          {/* FAQ Cards Container */}
          <Box
            bg="#8FBC94"
            p={8}
            borderRadius="md"
          >
            <VStack align="stretch">
              {faqData.map((faq, index) => (
                <FAQCard
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
