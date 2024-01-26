'use client'
import MainLayout from "@/components/layouts/MainLayout";
import MemberSections from "@/components/sections/about/MemberSections";
import Services from "@/components/sections/services/Services";
import { useSelector } from "react-redux"

export default function Home() {
  const { currentUser } = useSelector((state:any) => state.auth);
  return (
    <>
    <MainLayout>
    <MemberSections/>
    </MainLayout>
    </>
  )
}
