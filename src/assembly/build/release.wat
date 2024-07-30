(module
 (type $0 (func (param i32) (result i32)))
 (memory $0 0)
 (export "fib" (func $src/assembly/src/fib/fib))
 (export "memory" (memory $0))
 (func $src/assembly/src/fib/fib (param $0 i32) (result i32)
  local.get $0
  i32.const 1
  i32.le_s
  if (result i32)
   local.get $0
  else
   local.get $0
   i32.const 1
   i32.sub
   call $src/assembly/src/fib/fib
   local.get $0
   i32.const 2
   i32.sub
   call $src/assembly/src/fib/fib
   i32.add
  end
 )
)
