(module
 (type $0 (func (param i32) (result i32)))
 (global $~lib/memory/__data_end i32 (i32.const 8))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 32776))
 (global $~lib/memory/__heap_base i32 (i32.const 32776))
 (memory $0 0)
 (table $0 1 1 funcref)
 (elem $0 (i32.const 1))
 (export "fib" (func $src/assembly/src/fib/fib))
 (export "memory" (memory $0))
 (func $src/assembly/src/fib/fib (param $n i32) (result i32)
  local.get $n
  i32.const 1
  i32.le_s
  if (result i32)
   local.get $n
  else
   local.get $n
   i32.const 1
   i32.sub
   call $src/assembly/src/fib/fib
   local.get $n
   i32.const 2
   i32.sub
   call $src/assembly/src/fib/fib
   i32.add
  end
  return
 )
)
