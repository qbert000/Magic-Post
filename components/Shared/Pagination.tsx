'use client'
import {Pagination, PaginationCursor, PaginationItemRenderProps, PaginationItemType} from "@nextui-org/react";
import { ChevronLeft } from 'lucide-react';
import { Button } from "../ui/button";
import { useState } from "react";
import InventoryOrder from "../forms/InventoryOrder";

interface Props {
  data : any[]
  workPlace : string,
}

const PaginationPage = ({data, workPlace} : Props) => {
  const pageNumber = data.length
  const [i, setI] = useState<number>(0)
  const [page, setPage] = useState(data[0])
  const [done, setDone] = useState(data.map((item) => (false)))

  const changePage = (page : number) => {
    setI(page-1)
    setPage(data[page-1])
    console.log(done)
    
  }

  const pageDone = (page : number) => {
    let donevir: boolean[] = [];
    done.forEach((done, index) => {
      if(index === page) {
        donevir.push(true)
      } else {
        donevir.push(done)
      }
    })

    console.log(donevir)
    setDone(donevir)
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
      initialPage={1}
      className="gap-2"
      radius="full"
      renderItem={renderItem}
      variant="light"
      onChange={(page:number) => changePage(page)}
    />

    <InventoryOrder 
      fullname={page.senderName}
      phone={page.phone}
      receiver={page.receiverName}
      address={page.address}
      typeOrder={page.typeOrder}
      id={page.id}
      workPlace={workPlace}
      pageDone={pageDone}
      page={i}
      done={done[i]}
    />

    </>
  );
}

export default PaginationPage;




// grid grid-cols-2

// flex itemx-center
// w-4
// font-light
// 
// 
// 
// 
// 
// 