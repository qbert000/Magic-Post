'use client'
import {Button, Pagination, PaginationCursor, PaginationItemRenderProps, PaginationItemType} from "@nextui-org/react";
import { ChevronLeft } from 'lucide-react';
// import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import TableMagic from "./TableMagic";
import { GetAllOrderByOwner } from "@/lib/actions/order.action";
import { orderWork } from "../columns/OrderWork";
import { SearchColumns } from "@/client/contants/enum";
import { passOrderToOwner } from "@/client/util/orderUtil";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  pageNumber : number,
  pageNow : number,
}

const PaginationTableMagic = ({pageNumber, pageNow} : Props) => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(pageNow + "");
  const changePage = (page : number) => {
    console.log(page)
    router.push(`/owner/statistics/${page}`)
    
  }

  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }: PaginationItemRenderProps ) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button key={key} className="min-w-8 w-8 h-8" onClick={onNext}>
          <ChevronLeft className="rotate-180" />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button key={key} className="min-w-8 w-8 h-8" onClick={onPrevious}>
          <ChevronLeft />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return <button key={key} className={className}>...</button>;
    }
    
    // cursor is the default item
    return (
      <Button
        key={key}
        ref={ref}
        className={`min-w-8 w-8 h-8 ${
          isActive &&
          "text-white bg-gradient-to-br from-indigo-500 to-pink-500 font-bold"}`
        }
        onClick={() => setPage(value)}
      >
          {value}
      </Button>
    );
  };
  


  return (
    <>
    
    <Pagination
      disableCursorAnimation
      showControls
      loop
      total={pageNumber}
      initialPage={parseInt(currentPage)}
      className="gap-2"
      radius="full"
      renderItem={renderItem}
      variant="light"
      onChange={(page:number) => changePage(page)}
    />

    </>
  );
}

export default PaginationTableMagic;


