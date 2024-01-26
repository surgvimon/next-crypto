import AdminLayout from "@/components/layouts/AdminLayout";
import DataTable from "@/components/orders/DataTable";
import DataTableList from "@/components/orders/DataTableList";
import EmployeeForm from "@/components/profiles/EmployeeForm";

export default function OrdersPage() {
  return (
    <>
    <AdminLayout>
      <DataTableList />
      {/* <DataTable /> */}
    </AdminLayout>
    </>
  )
}
